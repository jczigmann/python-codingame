# 🔤 Fiche Python — Chaînes de caractères : manipulations et snippets utiles

---

## ⚙️ 1️⃣ Définition

Une **chaîne** est une séquence immuable de caractères.

```python
s = "bonjour la compagnie"
```

---

## 🧩 2️⃣ Opérations de base

| Action | Code | Résultat |
|--------|------|----------|
| Longueur | `len(s)` | `21` |
| Accès caractère | `s[0]` | `'b'` |
| Sous-chaîne (slice) | `s[2:10]` | `'njour la'` |
| Dernier caractère | `s[-1]` | `'e'` |
| Inverser la chaîne | `s[::-1]` | `'eignaicpmoc al ruojnob'` |

---

## 🔠 3️⃣ Changements de casse

```python
s.upper()        # 'BONJOUR LA COMPAGNIE'
s.lower()        # 'bonjour la compagnie'
s.capitalize()   # 'Bonjour la compagnie'
s.title()        # 'Bonjour La Compagnie'
```

---

## ✂️ 4️⃣ Nettoyage et découpe

```python
s.strip()                 # retire les espaces au début/fin
s.split()                 # ['bonjour', 'la', 'compagnie']
s.split(" ")              # idem, séparé par espace
"-".join(['a','b','c'])   # 'a-b-c'
s.replace("bonjour", "salut")  # 'salut la compagnie'
```

---

## 🎯 5️⃣ Recherche et vérifications

| Méthode | Effet | Exemple |
|----------|--------|----------|
| `startswith(txt)` | commence par | `s.startswith("bon") → True` |
| `endswith(txt)` | se termine par | `s.endswith("ie") → True` |
| `find(txt)` | position du 1er texte ou -1 | `s.find("la") → 8` |
| `count(txt)` | nb d’occurrences | `s.count("o") → 3` |
| `in` | vérifie présence | `'jour' in s → True` |

---

## 🧮 6️⃣ Vérifications de type de contenu

```python
"123".isdigit()      # True
"abc".isalpha()      # True
"abc123".isalnum()   # True
"bonjour".islower()  # True
"BONJOUR".isupper()  # True
" ".isspace()        # True
```

---

## 🧠 7️⃣ Anagrammes

Deux chaînes sont des **anagrammes** si elles contiennent les mêmes lettres.

### a) Avec `sorted()`
```python
def est_anagramme(a, b):
    a = a.replace(" ", "").lower()
    b = b.replace(" ", "").lower()
    return sorted(a) == sorted(b)
```

### b) Avec `collections.Counter`
```python
from collections import Counter

def est_anagramme(a, b):
    return Counter(a.replace(" ", "").lower()) == Counter(b.replace(" ", "").lower())
```

---

## 🧩 8️⃣ Snippets pratiques

### 🔁 Inverser une chaîne
```python
mot_inverse = s[::-1]
```

### 🔡 Compter les lettres
```python
from collections import Counter
lettres = Counter(s)
print(lettres.most_common(3))  # 3 lettres les plus fréquentes
```

### 🔤 Vérifier un palindrome
```python
def est_palindrome(texte):
    t = texte.replace(" ", "").lower()
    return t == t[::-1]
```

### 🔍 Supprimer la ponctuation
```python
import string
s = "Salut, comment ça va ?"
nettoye = s.translate(str.maketrans('', '', string.punctuation))
# 'Salut comment ça va '
```

### 🔠 Compter les mots uniques
```python
texte = "bonjour la compagnie bonjour la team"
print(len(set(texte.split())))  # 4 mots uniques
```

---

## 🧾 9️⃣ En résumé

| Objectif | Méthode |
|-----------|----------|
| Rechercher / vérifier | `find`, `startswith`, `endswith`, `in` |
| Compter / remplacer | `count`, `replace` |
| Nettoyer / découper | `strip`, `split`, `join` |
| Majuscules / minuscules | `upper`, `lower`, `capitalize`, `title` |
| Vérifications de contenu | `isdigit`, `isalpha`, `isalnum`, `isspace` |
| Cas typiques | anagrammes, palindrome, nettoyage texte |

---

💡 **Astuce :**
> Les chaînes sont **immuables**, donc chaque opération renvoie **une nouvelle chaîne**.
