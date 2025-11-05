# 🧩 Fiche Python — Choisir la bonne structure de données

## 🎯 Objectif

Savoir **analyser un problème** et **choisir la structure de données Python la plus adaptée** :  
`list`, `tuple`, `set`, `dict`, ou `frozenset`.

---

# 🧠 Exercices — Problèmes concrets et choix des structures

---

### 🚗 1. Gestion d’un parking

**Problème :**
- Enregistrer les plaques des voitures présentes.  
- Ajouter, retirer et vérifier une plaque.  
- Aucune plaque en double.

**Structure conseillée :** `set`  
✅ Rapide pour les tests d’appartenance (`in`) et empêche les doublons.

```python
parking = set()
parking.add("AB-123-CD")
parking.remove("AB-123-CD")
if "AB-123-CD" in parking:
    print("Présente")
```

---

### 📚 2. Catalogue de livres

**Problème :**
- Stocker titre, auteur, année.  
- Rechercher par titre, éviter les doublons.

**Structure conseillée :** `dict`  
👉 Clé = titre, Valeur = tuple (auteur, année)

```python
catalogue = {
    "1984": ("Orwell", 1949),
    "Dune": ("Herbert", 1965)
}
```

---

### 🎵 3. Playlist musicale

**Problème :**
- Ordre important, doublons autorisés, lecture séquentielle.

**Structure conseillée :** `list`  
👉 Une liste garde l’ordre et accepte les doublons.

```python
playlist = ["Imagine", "Yesterday", "Imagine"]
playlist.append("Let it Be")
```

---

### 🧾 4. Historique de navigation

**Problème :**
- Stocker les 5 dernières pages visitées (FIFO).

**Structure conseillée :** `collections.deque`  
👉 File à taille fixe, suppression automatique des plus anciennes.

```python
from collections import deque
historique = deque(maxlen=5)
historique.append("page1")
historique.append("page2")
```

---

### 📦 5. Stock d’un entrepôt

**Problème :**
- Associer un produit à sa quantité disponible.  
- Recherche rapide par nom.

**Structure conseillée :** `dict`  
👉 Clé = nom du produit, Valeur = quantité.

```python
stock = {"pomme": 50, "banane": 30}
stock["kiwi"] = 15
print(stock["pomme"])
```

---

### 🎯 6. Analyse d’un sondage

**Problème :**
- Compter combien de fois chaque réponse apparaît, et lister les réponses uniques.

**Structure conseillée :** `dict` + `set`  
👉 `set` pour les réponses uniques, `dict` pour les compteurs.

```python
reponses = ["Python", "C++", "Python", "Rust", "Python"]
uniques = set(reponses)
compteur = {lang: reponses.count(lang) for lang in uniques}
```

---

### 🗺️ 7. Réseau social miniature

**Problème :**
- Chaque utilisateur a un pseudo, des amis et une ville.

**Structure conseillée :** `dict`  
👉 Clé = pseudo, Valeur = dict ou tuple avec infos utilisateur.

```python
reseau = {
    "alice": {"amis": {"bob", "charlie"}, "ville": "Nice"},
    "bob": {"amis": {"alice"}, "ville": "Paris"}
}
```

---

### 🧮 8. Jeu de dés statistiques

**Problème :**
- Stocker les lancers, compter la fréquence et trouver le plus fréquent.

**Structure conseillée :** `list` + `dict`

```python
import random
lancers = [random.randint(1, 6) for _ in range(100)]
frequences = {i: lancers.count(i) for i in set(lancers)}
plus_frequent = max(frequences, key=frequences.get)
```

---

# 📊 Résumé — Critères de choix

| Besoin | Structure conseillée | Pourquoi |
|--------|----------------------|-----------|
| Ordre important | `list` | Indexation, tri, insertion facile |
| Données immuables | `tuple` | Sécurité, clé de dict possible |
| Unicité garantie | `set` | Évite les doublons, tests rapides |
| Association clé ↔ valeur | `dict` | Accès direct, stockage structuré |
| Données fixes et uniques | `frozenset` | Immuable, utilisable comme clé |
| File ou pile | `deque` | Rapide pour append/pop en tête et queue |

---

## 💡 À retenir

> Choisis ta structure selon :
> - 🔁 **Ordre** (liste)  
> - 🚫 **Unicité** (set)  
> - 🧭 **Association clé-valeur** (dict)  
> - 🧱 **Données figées** (tuple, frozenset)  
> - ⚙️ **Performance** (set/dict pour tests rapides)

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Choisir la bonne structure de données**  
🕓 *Mise à jour : Novembre 2025*
