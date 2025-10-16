# 🗂️ Fiche Python — Dictionnaires et Ensembles (`dict` / `set`)

---

## 📘 1️⃣ Dictionnaires (`dict`)

Un **dictionnaire** stocke des paires **clé → valeur**.

```python
personne = {"nom": "Jean", "age": 30, "ville": "Paris"}
```

### Accès et modification
```python
print(personne["nom"])        # 'Jean'
personne["age"] = 31          # modification
personne["pays"] = "France"   # ajout
del personne["ville"]         # suppression
```

---

## 🧩 2️⃣ Parcours d’un dictionnaire

| Méthode | Description | Exemple |
|----------|--------------|----------|
| `.keys()` | les clés | `for k in d.keys():` |
| `.values()` | les valeurs | `for v in d.values():` |
| `.items()` | clés et valeurs | `for k, v in d.items():` |

```python
for k, v in personne.items():
    print(f"{k} → {v}")
```

---

## 🧮 3️⃣ Fonctions utiles sur les dictionnaires

| Action | Code | Résultat |
|--------|------|-----------|
| Taille | `len(d)` | nb d’éléments |
| Vérifier clé | `"nom" in d` | booléen |
| Copier | `copie = d.copy()` | clone |
| Fusionner | `d.update(autre_dict)` | ajoute ou remplace |
| Valeur par défaut | `d.get("clé", "valeur si absente")` | évite KeyError |
| Vider | `d.clear()` | dictionnaire vide |

---

## ⚙️ 4️⃣ Compréhension de dictionnaire

```python
nombres = [1, 2, 3, 4]
carres = {x: x**2 for x in nombres}
print(carres)  # {1: 1, 2: 4, 3: 9, 4: 16}
```

---

## 📊 5️⃣ Dictionnaires imbriqués

```python
eleves = {
    "Luc": {"age": 20, "note": 15},
    "Emma": {"age": 22, "note": 18}
}
print(eleves["Emma"]["note"])  # 18
```

---

## 🧠 6️⃣ Compter les éléments avec `collections.Counter`

```python
from collections import Counter
texte = "abracadabra"
compte = Counter(texte)
print(compte)               # Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})
print(compte.most_common(2)) # [('a', 5), ('b', 2)]
```

---

## 💡 7️⃣ Créer un dictionnaire à partir de deux listes

```python
cles = ["nom", "age", "ville"]
valeurs = ["Luc", 25, "Lyon"]
d = dict(zip(cles, valeurs))
print(d)  # {'nom': 'Luc', 'age': 25, 'ville': 'Lyon'}
```

---

# 🧮 Ensembles (`set`)

---

## ⚙️ 1️⃣ Définition

Un **ensemble** est une collection **non ordonnée** d’éléments **uniques**.

```python
nombres = {1, 2, 3, 3, 4}
print(nombres)   # {1, 2, 3, 4}
```

---

## 🔁 2️⃣ Méthodes principales sur `set`

| Méthode | Action | Exemple |
|----------|--------|----------|
| `add(x)` | ajoute un élément | `s.add(5)` |
| `remove(x)` | supprime (erreur si absent) | `s.remove(3)` |
| `discard(x)` | supprime sans erreur | `s.discard(99)` |
| `clear()` | vide l’ensemble | `s.clear()` |
| `copy()` | copie l’ensemble | `s2 = s.copy()` |

---

## 🔗 3️⃣ Opérations entre ensembles

| Opération | Symbole | Exemple | Résultat |
|------------|----------|----------|-----------|
| Union | `|` ou `.union()` | `A | B` | tous les éléments |
| Intersection | `&` ou `.intersection()` | `A & B` | communs |
| Différence | `-` ou `.difference()` | `A - B` | dans A pas dans B |
| Différence symétrique | `^` | `A ^ B` | dans A ou B mais pas les deux |
| Inclusion | `<` ou `<=` | `A < B` | A inclus dans B |

---

### Exemple complet

```python
A = {1, 2, 3, 4}
B = {3, 4, 5}

print(A | B)  # {1, 2, 3, 4, 5}
print(A & B)  # {3, 4}
print(A - B)  # {1, 2}
print(A ^ B)  # {1, 2, 5}
```

---

## 🧠 4️⃣ Conversion et dédoublonnage rapide

```python
liste = [1, 2, 2, 3, 3, 4]
unique = list(set(liste))
print(unique)  # [1, 2, 3, 4]
```

---

## ⚡ 5️⃣ Ensemble vide

⚠️ Attention :
```python
s = set()   # ✅ bon
s = {}      # ❌ crée un dictionnaire vide
```

---

## 💡 6️⃣ En résumé

| Type | Structure | Points forts |
|------|------------|---------------|
| **dict** | `{clé: valeur}` | association clé/valeur, recherche rapide |
| **set** | `{valeur}` | unique, rapide, opérations ensemblistes |

---

📘 *Astuce bonus :*
> Les dictionnaires (`dict`) depuis Python 3.7 conservent l’ordre d’insertion des clés.
