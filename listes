# 🔢 Fiche Python — Listes : tri, compréhension et méthodes pratiques

---

## ⚙️ 1️⃣ Définition d'une liste

```python
fruits = ["pomme", "banane", "cerise"]
```

- Une **liste** est une **séquence modifiable (mutable)**.  
- Elle peut contenir tout type d’éléments (entiers, chaînes, listes, etc.).

---

## 🧩 2️⃣ Méthodes principales

| Méthode | Action | Exemple | Résultat |
|----------|--------|----------|-----------|
| `append(x)` | ajoute un élément à la fin | `l.append(4)` | `[1,2,3,4]` |
| `extend([x,y])` | ajoute plusieurs éléments | `l.extend([5,6])` | `[1,2,3,4,5,6]` |
| `insert(i, x)` | insère à l’indice i | `l.insert(1,99)` | `[1,99,2,3]` |
| `remove(x)` | supprime la **1re occurrence** | `l.remove(99)` | `[1,2,3]` |
| `pop(i)` | retire l’élément à l’indice i | `l.pop(0)` | `[2,3]` |
| `sort()` | trie sur place | `l.sort()` | `[1,2,3]` |
| `reverse()` | inverse l’ordre | `l.reverse()` | `[3,2,1]` |
| `count(x)` | compte les occurrences | `l.count(2)` | `1` |
| `index(x)` | donne la position | `l.index(2)` | `1` |

---

## ⚡ 3️⃣ Tri de listes

### Tri simple
```python
nombres = [5, 1, 8, 3]
nombres.sort()
print(nombres)  # [1, 3, 5, 8]
```

### Tri sans modifier la liste originale
```python
nombres = [5, 1, 8, 3]
print(sorted(nombres))  # [1, 3, 5, 8]
print(nombres)          # [5, 1, 8, 3]
```

### Tri avec une fonction `key`
```python
mots = ["python", "est", "puissant"]
print(sorted(mots, key=len))  # ['est', 'python', 'puissant']
```

### Tri personnalisé (lambda)
```python
eleves = [("Emma", 15), ("Luc", 17), ("Alice", 12)]
print(sorted(eleves, key=lambda x: x[1], reverse=True))
# [('Luc', 17), ('Emma', 15), ('Alice', 12)]
```

---

## 🧠 4️⃣ Compréhensions de listes

### Forme générale
```python
[nouvelle_valeur for élément in liste if condition]
```

### Exemples
```python
carres = [x**2 for x in range(5)]          # [0,1,4,9,16]
pairs  = [x for x in range(10) if x%2==0]  # [0,2,4,6,8]
mots   = ["bonjour", "salut", "hey"]
majuscules = [m.upper() for m in mots]     # ['BONJOUR', 'SALUT', 'HEY']
```

---

## 🔁 5️⃣ Boucles utiles avec `enumerate` et `zip`

### `enumerate()` : index + valeur
```python
for i, v in enumerate(["a","b","c"]):
    print(i, v)
# 0 a
# 1 b
# 2 c
```

### `zip()` : regrouper plusieurs listes
```python
noms = ["Luc", "Emma", "Léa"]
ages = [25, 30, 22]
for nom, age in zip(noms, ages):
    print(f"{nom} a {age} ans")
```

---

## 🧩 6️⃣ Astuces utiles

| Action | Code | Résultat |
|--------|------|-----------|
| Copier une liste | `copie = liste[:]` | crée une nouvelle liste |
| Fusionner deux listes | `a + b` | concatène |
| Vérifier appartenance | `x in liste` | booléen |
| Supprimer doublons | `list(set(liste))` | non ordonné |
| Longueur | `len(liste)` | nombre d’éléments |
| Liste vide | `[]` | vide |

---

## 🧮 7️⃣ Fonctions puissantes à connaître

| Fonction | Rôle | Exemple |
|-----------|------|----------|
| `sum(liste)` | somme des éléments | `sum([1,2,3]) → 6` |
| `min(liste)` / `max(liste)` | extrêmes | `min([3,5,1]) → 1` |
| `any(liste)` | au moins un élément vrai | `any([0,1,0]) → True` |
| `all(liste)` | tous vrais | `all([1,2,3]) → True` |

---

## 💡 8️⃣ En résumé

| Objectif | Méthode ou fonction |
|-----------|---------------------|
| Ajouter / supprimer | `append`, `pop`, `remove` |
| Trier | `sort`, `sorted(key=...)` |
| Transformer | list comprehension |
| Boucler proprement | `enumerate`, `zip` |
| Fusionner | `+`, `extend` |
| Compter / filtrer | `count`, `len`, `in`, `any`, `all` |

---

📘 *Astuce bonus :*
```python
# Copier sans lien (shallow copy)
import copy
nouvelle = copy.copy(liste)
```
