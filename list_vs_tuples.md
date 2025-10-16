# 🐍 Fiche Python — Différences entre Listes et Tuples

---

## ⚙️ 1️⃣ Définition

| Type | Syntaxe | Exemple |
|------|----------|----------|
| **Liste (`list`)** | crochets `[...]` | `ma_liste = [1, 2, 3]` |
| **Tuple (`tuple`)** | parenthèses `(...)` | `mon_tuple = (1, 2, 3)` |

---

## 🔁 2️⃣ Mutabilité

| Type | Modifiable ? | Exemple |
|------|---------------|----------|
| **Liste** | ✅ Oui | `ma_liste[0] = 99` → `[99, 2, 3]` |
| **Tuple** | ❌ Non | `mon_tuple[0] = 99` → ❌ `TypeError` |

➡️ Les **listes** peuvent être modifiées (ajout, suppression, tri).  
➡️ Les **tuples** sont **immutables** (figés après création).

---

## ⚡ 3️⃣ Opérations principales

| Opération | Liste | Tuple |
|------------|--------|--------|
| Ajouter | ✅ `append(x)` | ❌ |
| Supprimer | ✅ `remove(x)` | ❌ |
| Trier | ✅ `sort()` | ❌ |
| Concaténer | ✅ `+` | ✅ `+` |
| Compter | ✅ `count()` | ✅ `count()` |
| Trouver index | ✅ `index()` | ✅ `index()` |

---

## 🚀 4️⃣ Utilisation typique

| Cas d’usage | Type conseillé | Exemple |
|--------------|----------------|----------|
| Données modifiables | **Liste** | `courses = ["pain", "lait", "œufs"]` |
| Données fixes / constantes | **Tuple** | `point = (3, 4)` |

---

## 🧠 5️⃣ Avantages du tuple

- 🔒 Immuable → protège les données fixes  
- ⚡ Plus rapide et plus léger  
- 🧩 Utilisable comme **clé de dictionnaire**

```python
coord = (10, 20)
dico = {coord: "Point A"}  # ✅ possible

coord_liste = [10, 20]
dico = {coord_liste: "Point A"}  # ❌ TypeError
