# 🧩 Fiche Python — Mix des structures de données (patterns & anti‑patterns)

## 🎯 Objectif
Choisir **la bonne combinaison** de structures (`list`, `tuple`, `set`, `dict`, `deque`, …) selon les **contraintes** d’un problème : ordre, unicité, accès par clé, immutabilité, performance.

---

## 🧭 Check‑list de décision (rapide)
- Accès **par nom de champ** → `dict` / `dataclass` / `NamedTuple`
- Données **immuables & légères** → `tuple` / `NamedTuple` / `frozenset`
- **Unicité** des éléments → `set` (ou `dict` pour compter)
- **Indexation** par identifiant → `dict[id → {...}]`
- Plusieurs valeurs **par clé** :
  - Ordre important → `dict[key → list]`
  - Unicité importante → `dict[key → set]`
- Déduplication / comparaison de “rows” → `set[tuple]`
- Historique **FIFO/LIFO** → `deque` (module `collections`)

---

## 📦 Les meilleurs “mix” et quand les utiliser

### 1) `list[tuple]` — enregistrements **légers, immuables**
**Quand ?** Petits “rows” fixes, tri/itération fréquents, pas d’update champ par champ.  
**Pourquoi ?** Léger, rapide, hashable si besoin.  
**Exemple**
```python
utilisateurs = [(1, "Alice", 30), (2, "Bob", 28)]
# Tri par âge
utilisateurs = sorted(utilisateurs, key=lambda r: r[2])
```

---

### 2) `list[dict]` — enregistrements **flexibles, nommés**
**Quand ?** Champs nommés, schéma évolutif, parsing JSON / API.  
**Pourquoi ?** Lisible et extensible.  
**Exemple**
```python
livres = [
    {"titre": "Dune", "auteur": "Herbert", "annee": 1965},
    {"titre": "Silo", "auteur": "Howey", "annee": 2011},
]
recents = [l for l in livres if l["annee"] >= 2000]
```

---

### 3) `dict[str, dict]` — **indexation** rapide + valeurs riches
**Quand ?** Accès direct par id/pseudo/SKU, mises à jour fréquentes.  
**Pourquoi ?** O(1) par clé, valeurs structurées.  
**Exemple**
```python
users = {
    "alice": {"amis": {"bob"}, "ville": "Nice"},
    "bob":   {"amis": {"alice"}, "ville": "Paris"},
}
users["alice"]["ville"] = "Cannes"
```

---

### 4) `dict[str, list]` — index → **plusieurs valeurs ordonnées**
**Quand ?** Un‑à‑plusieurs **ordonné** (ville → utilisateurs), ordre d’arrivée.  
**Exemple**
```python
par_ville = {}
for u in ["alice", "bob", "carol"]:
    ville = "Nice" if u != "bob" else "Paris"
    par_ville.setdefault(ville, []).append(u)
```

---

### 5) `dict[str, set]` — index → **plusieurs valeurs uniques**
**Quand ?** Un‑à‑plusieurs sans doublons (tags, abonnés, droits).  
**Pourquoi ?** Opés ensemblistes rapides (union/intersection).  
**Exemple**
```python
tags = {"python": {"alice", "carol"}, "c++": {"bob"}}
python_ou_cpp = tags["python"] | tags["c++"]
```

---

### 6) `set[tuple]` — déduplication & calculs d’ensembles sur “rows”
**Quand ?** Supprimer doublons de lignes, comparer datasets.  
**Exemple**
```python
a = {(1, "Alice"), (2, "Bob")}
b = {(2, "Bob"), (3, "Carol")}
nouveaux = b - a      # {(3, "Carol")}
communs  = a & b      # {(2, "Bob")}
```

---

### 7) `list[NamedTuple]` / `list[dataclass]` — **typé & lisible**
**Quand ?** Noms de champs + (im)mutabilité contrôlée + type hints.  
**Exemple (NamedTuple)**
```python
from typing import NamedTuple
class User(NamedTuple):
    id: int; nom: str; age: int

utilisateurs = [User(1, "Alice", 30), User(2, "Bob", 28)]
```

---

### 8) `deque` — **file/pile** performante (FIFO/LIFO)
**Quand ?** Historique à taille fixe, nombreuses ops en tête/queue.  
**Exemple**
```python
from collections import deque
hist = deque(maxlen=5)
for page in ["a","b","c","d","e","f"]:
    hist.append(page)   # garde les 5 dernières
```

---

## 🧪 Recettes utiles

### Déduplication d’une liste de dict (par clé)
```python
vus, result = set(), []
for d in donnees:
    k = d["id"]
    if k not in vus:
        vus.add(k)
        result.append(d)
```

### GroupBy sans pandas (clé → liste)
```python
groupes = {}
for row in rows:
    k = row["ville"]
    groupes.setdefault(k, []).append(row)
```

### Comptage d’occurrences
```python
freq = {}
for x in items:
    freq[x] = freq.get(x, 0) + 1
```

---

## ⚠️ Anti‑patterns (à éviter)
- `list[dict]` **sans clé unique** alors que tu recherches par id → préfère `dict[id → dict]`.  
- `list[list]` pour des “rows” nommés → illisible → préfère `tuple`/`NamedTuple`/`dict`.  
- `set[dict]` / `set[list]` (non hashables) → transforme en `tuple` d’abord.  
- “Mega‑dict” fourre‑tout → l’intention se perd → sépare les responsabilités.

---

## 🧭 Tableau récap’ des combos
| Besoin | Combo conseillé | Pourquoi |
|---|---|---|
| Rows légers immuables | `list[tuple]` | Tri/itération rapides, faible overhead |
| Rows lisibles & évolutifs | `list[dict]` | Champs nommés, schéma flexible |
| Accès instantané par id | `dict[id, dict]` | O(1) par clé, updates fréquents |
| Regroupement ordonné | `dict[key, list]` | Conserver l’ordre d’arrivée |
| Regroupement unique | `dict[key, set]` | Unicité, ensembles rapides |
| Comparaison de datasets | `set[tuple]` | Union/intersection/différence |
| Historique/file | `deque` | Append/pop tête/queue performant |

---

## 💡 À retenir
> Le “bon mix” reflète ta **contrainte principale** :  
> **ordre** (list), **unicité** (set), **indexation** (dict), **immutabilité** (tuple), **FIFO/LIFO** (deque).  
> Combine‑les pour que la structure **raconte l’intention** de ton code.

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Mix des structures (patterns & anti‑patterns)**  
🕓 *Mise à jour : Novembre 2025*
