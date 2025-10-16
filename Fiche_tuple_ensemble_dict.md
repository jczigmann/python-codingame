# 🐍 Fiche Python : Tuple, Ensemble et Dictionnaire

---

## 🔸 1. Tuple (`tuple`)

### ➤ Définition
Un **tuple** est une **séquence ordonnée et immuable** d’éléments.

### ➤ Syntaxe
```python
mon_tuple = (1, 2, 3)
```

### ➤ Caractéristiques
- ✅ Ordonné  
- ❌ Non modifiable (immuable)  
- ✅ Autorise les doublons  
- Accès par **index**

### ➤ Exemple
```python
coordonnees = (10, 20)
print(coordonnees[0])   # → 10
print(len(coordonnees)) # → 2
```

### ➤ Utilisation typique
Stocker des **données fixes** ou des **paires logiques** (ex : coordonnées, date, etc.)

---

## 🔸 2. Ensemble (`set`)

### ➤ Définition
Un **ensemble** est une **collection non ordonnée et sans doublons**.

### ➤ Syntaxe
```python
mon_ensemble = {1, 2, 3}
```

### ➤ Caractéristiques
- ❌ Non ordonné  
- ✅ Modifiable  
- ❌ Pas de doublons  
- Accès par **appartenance** (`in`)

### ➤ Exemple
```python
nombres = {1, 2, 3, 3}
print(nombres)          # → {1, 2, 3}  (doublon supprimé)
nombres.add(4)
print(2 in nombres)     # → True
```

### ➤ Opérations d’ensemble
```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # Union → {1, 2, 3, 4, 5}
print(a & b)  # Intersection → {3}
print(a - b)  # Différence → {1, 2}
```

### ➤ Utilisation typique
Supprimer les doublons d’une liste, tester des intersections ou unions de données.

---

## 🔸 3. Dictionnaire (`dict`)

### ➤ Définition
Un **dictionnaire** associe des **clés** à des **valeurs**.  
Chaque clé est **unique**, chaque valeur peut être de tout type.

### ➤ Syntaxe
```python
mon_dict = {"nom": "Alice", "age": 30}
```

### ➤ Caractéristiques
- ✅ Ordonné (depuis Python 3.7)  
- ✅ Modifiable  
- ❌ Clés uniques  
- Accès par **clé**

### ➤ Exemple
```python
personne = {"nom": "Alice", "age": 30}

print(personne["nom"])   # → Alice
personne["ville"] = "Paris"
print(personne)          # → {'nom': 'Alice', 'age': 30, 'ville': 'Paris'}
```

### ➤ Parcourir un dictionnaire
```python
for cle, valeur in personne.items():
    print(cle, "→", valeur)
```

### ➤ Utilisation typique
Stocker des **informations structurées** (par ex. une fiche utilisateur).

---

## 🧩 Tableau comparatif

| Type | Syntaxe | Ordonné | Modifiable | Doublons | Accès | Exemple |
|------|----------|----------|-------------|-----------|--------|----------|
| **Tuple** | `(1, 2, 3)` | ✅ Oui | ❌ Non | ✅ Oui | Par index (`t[0]`) | Coordonnées `(x, y)` |
| **Set** | `{1, 2, 3}` | ❌ Non | ✅ Oui | ❌ Non | Test `in` | Éliminer les doublons |
| **Dict** | `{"nom": "Alice"}` | ✅ Oui | ✅ Oui | ❌ Clés uniques | Par clé (`d["nom"]`) | Associer clé/valeur |

---

## 💡 Astuce
- Convertir une **liste en set** pour supprimer les doublons :
  ```python
  ma_liste = [1, 2, 2, 3]
  unique = set(ma_liste)  # → {1, 2, 3}
  ```
- Convertir un **tuple en liste** si besoin de le modifier :
  ```python
  t = (1, 2, 3)
  l = list(t)
  ```

---

✍️ **Résumé**
- **Tuple** : données fixes, ordonnées  
- **Set** : éléments uniques, non ordonnés  
- **Dict** : association clé → valeur

---
