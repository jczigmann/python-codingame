# 🧩 Fiche Python — Structures de données natives

## 📘 Définition

Python offre plusieurs **structures de données intégrées (built-in)** permettant de stocker, organiser et manipuler des données efficacement.  
Ces structures sont disponibles **sans importation de module externe**.

---

## 🔹 Tableau récapitulatif

| Type | Syntaxe | Mutabilité | Ordre | Doublons | Description |
|------|----------|------------|--------|-----------|--------------|
| **`list`** | `[1, 2, 3]` | ✅ Oui | ✅ Oui | ✅ Oui | Séquence ordonnée et modifiable |
| **`tuple`** | `(1, 2, 3)` | ❌ Non | ✅ Oui | ✅ Oui | Séquence ordonnée et immuable |
| **`set`** | `{1, 2, 3}` | ✅ Oui | ❌ Non | ❌ Non | Ensemble non ordonné, unique |
| **`frozenset`** | `frozenset({1, 2, 3})` | ❌ Non | ❌ Non | ❌ Non | Ensemble immuable |
| **`dict`** | `{"clé": "valeur"}` | ✅ Oui | ✅ Oui (≥3.7) | ❌ Clés uniques | Association clé ↔ valeur |
| **`str`** | `"abc"` | ❌ Non | ✅ Oui | ✅ Oui | Séquence de caractères (immuable) |
| **`range`** | `range(5)` | ❌ Non | ✅ Oui | ✅ Oui | Séquence d’entiers générée à la volée |
| **`bytes`** | `b"abc"` | ❌ Non | ✅ Oui | ✅ Oui | Séquence immuable d’octets |
| **`bytearray`** | `bytearray(b"abc")` | ✅ Oui | ✅ Oui | ✅ Oui | Séquence mutable d’octets |

---

## 🔸 Catégorisation

### 🔹 Séquences (ordonnées et indexables)
`list`, `tuple`, `str`, `range`, `bytes`, `bytearray`

### 🔹 Ensembles (non ordonnés, sans doublons)
`set`, `frozenset`

### 🔹 Mappages (clé ↔ valeur)
`dict`

---

## 🧠 Détails et usages typiques

### 1️⃣ **Listes (`list`)**
- Contiennent tout type d’objet, modifiables.  
- Idéal pour des **collections ordonnées** et **variables**.
```python
nombres = [1, 2, 3]
nombres.append(4)
```

### 2️⃣ **Tuples (`tuple`)**
- Immuables, rapides, souvent utilisés pour **regrouper des données fixes**.
```python
coord = (43.7, 7.26)
```

### 3️⃣ **Ensembles (`set`, `frozenset`)**
- Ne contiennent que des valeurs uniques.  
- Rapides pour les tests d’appartenance.
```python
fruits = {"pomme", "banane", "kiwi"}
"kiwi" in fruits  # True
```

### 4️⃣ **Dictionnaires (`dict`)**
- Associent des **clés uniques** à des **valeurs**.  
- Structure la plus flexible et puissante.
```python
personne = {"nom": "Alice", "age": 30}
```

### 5️⃣ **Chaînes (`str`)**
- Séquences immuables de caractères.  
- Supportent le slicing et les boucles.
```python
texte = "Python"
print(texte[0])  # P
```

### 6️⃣ **Ranges (`range`)**
- Génèrent des séquences d’entiers sans les stocker entièrement.
```python
for i in range(3):
    print(i)  # 0, 1, 2
```

### 7️⃣ **Bytes et Bytearray**
- Représentent des données binaires (fichiers, réseau...).
```python
b = b"Hello"
ba = bytearray(b)
ba[0] = 72  # Modifiable
```

---

## ⚙️ Structures dérivées (module `collections`)

| Type | Module | Description |
|------|---------|--------------|
| `deque` | `collections` | File/pile performante |
| `defaultdict` | `collections` | Dictionnaire avec valeur par défaut |
| `Counter` | `collections` | Compte les occurrences |
| `OrderedDict` | `collections` | Dictionnaire ordonné (inutile depuis 3.7) |
| `namedtuple` | `collections` | Tuple nommé (similaire à une mini-classe) |

---

## 💡 À retenir

> Les structures de données natives Python couvrent **90% des cas d’usage**.  
> Elles sont :
> - Simples (`list`, `dict`, `tuple`)  
> - Efficaces (`set`, `frozenset`)  
> - Complètes (`str`, `range`, `bytes`)  
>
> Pour des besoins avancés : explore le module `collections`.

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Structures de données natives**  
🕓 *Mise à jour : Novembre 2025*
