# 🧩 Fiche Python — Les Tuples

## 📘 Définition

Un **tuple** est une **séquence immuable** d’éléments **ordonnés**.  
Contrairement aux listes (`list`), les tuples **ne peuvent pas être modifiés** une fois créés.

### ✅ Utilisations principales :
- Regrouper des données hétérogènes (ex : coordonnées, dates…)
- Retourner plusieurs valeurs depuis une fonction
- Créer des clés de dictionnaire (car les tuples sont *hashables*)
- Représenter des enregistrements fixes

---

## 🧱 Syntaxe de base

```python
# Création d’un tuple
t = (1, 2, 3)

# Sans parenthèses (tuple implicite)
t = 1, 2, 3

# Tuple à un seul élément (virgule obligatoire)
t = (5,)

# Tuple vide
t = ()
```

---

## 🔍 Accès et parcours

```python
t = ('python', 3.11, True)

# Accès par indice
print(t[0])      # 'python'

# Slicing
print(t[1:])     # (3.11, True)

# Parcours
for x in t:
    print(x)
```

---

## ⚙️ Opérations courantes

```python
t = (1, 2, 3)

# Concaténation
print(t + (4, 5))       # (1, 2, 3, 4, 5)

# Répétition
print(t * 2)            # (1, 2, 3, 1, 2, 3)

# Test d’appartenance
print(2 in t)           # True

# Taille
print(len(t))           # 3

# Index et comptage
print(t.index(2))       # 1
print(t.count(1))       # 1
```

---

## 🚀 Cas d’utilisation concrets

### 1️⃣ Retour multiple d’une fonction
```python
def min_max(values):
    return min(values), max(values)

minimum, maximum = min_max([4, 2, 9])
print(minimum, maximum)   # 2 9
```

### 2️⃣ Déballage (unpacking)
```python
point = (10, 20)
x, y = point
print(f"x={x}, y={y}")   # x=10, y=20

# Ignorer une valeur
_, y = point
```

### 3️⃣ Itération sur des paires
```python
for nom, age in [('Alice', 25), ('Bob', 30)]:
    print(f"{nom} a {age} ans")
```

### 4️⃣ Tuple comme clé de dictionnaire
*(car les tuples sont immuables → hashables)*
```python
d = {}
coord = (48.8566, 2.3522)
d[coord] = "Paris"
print(d)
```

### 5️⃣ Tri par plusieurs clés
```python
data = [
    ('Alice', 'Dupont', 25),
    ('Bob', 'Martin', 30),
    ('Alice', 'Durand', 22)
]

# Tri par prénom puis nom
sorted_data = sorted(data, key=lambda x: (x[0], x[1]))
print(sorted_data)
```

---

## 🧠 Astuces pratiques

- Les tuples sont **plus rapides** et **plus légers** que les listes.  
- Utilise-les pour les **données constantes** ou **structurées**.  
- Les parenthèses sont **optionnelles**, sauf pour un tuple à un seul élément.

---

## 🧾 Exemple complet

```python
# Exemple : coordonnées GPS
ville = ("Nice", 43.7034, 7.2663)
nom, lat, lon = ville

print(f"{nom} se trouve à ({lat}, {lon})")

# Utilisation comme clé
villes = { (43.7034, 7.2663): "Nice", (48.8566, 2.3522): "Paris" }
print(villes[(43.7034, 7.2663)])
```

---

## 📚 Résumé

| Action | Exemple | Résultat |
|--------|----------|----------|
| Créer un tuple | `(1, 2, 3)` | tuple de 3 éléments |
| Tuple à un élément | `(5,)` | tuple contenant `5` |
| Déballage | `a, b = (1, 2)` | `a=1`, `b=2` |
| Immuabilité | `t[0] = 1` ❌ | erreur |
| Clé de dict | `d[(x, y)] = "coord"` | possible |

---
9
## 💡 À retenir

> Les **tuples** sont **immutables**, **ordonnés** et **rapides**.
> sert a stocker des données constantes et structurées
> Utilise-les pour des **données fixes**, le **retour multiple** de fonctions  
> ou la **déstructuration** simple d’objets.
> Exemple :
- retourner plusieurs valeurs depuis une fonction
- représenter un enregistrement fixe (coordonnées, date, etc.),
- stocker des données de référence (par exemple, des constantes de configuration).
- Une fois créé, son contenu ne peut plus être modifié : pas d’ajout, suppression ni remplacement.
- Plus rapide et plus léger qu’une liste → idéal pour des données stables et figées

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Les tuples**  
🕓 *Mise à jour : Novembre 2025*
