# 🐍 Fiche Python – Les Dictionnaires (`dict`)

## 📘 Définition
Un **dictionnaire** est une collection non ordonnée d’éléments sous forme de **paires clé–valeur**.  
Chaque clé doit être **unique** et **immuable** (ex. : chaîne, nombre, tuple), et elle sert à accéder à la valeur associée.

```python
personne = {
    "prenom": "Jean",
    "nom": "Dupont",
    "age": 35,
    "ville": "Nice"
}
```

---

## 🧱 Création
```python
# 1. Avec des accolades
d = {"a": 1, "b": 2}

# 2. Avec dict()
d = dict(a=1, b=2)

# 3. À partir d’une liste de tuples
d = dict([("a", 1), ("b", 2)])
```

---

## 🔍 Accès aux valeurs
```python
print(d["a"])       # → 1
print(d.get("b"))   # → 2
print(d.get("x", 0))  # → 0 (valeur par défaut si la clé n'existe pas)
```

⚠️ `d["x"]` lèvera une **KeyError** si la clé n’existe pas.

---

## ✏️ Ajout et modification
```python
d["c"] = 3        # ajout
d["a"] = 10       # modification
```

---

## ❌ Suppression
```python
del d["a"]        # supprime la clé 'a'
val = d.pop("b")  # supprime 'b' et renvoie sa valeur
d.clear()         # vide le dictionnaire
```

---

## ⚖️ `pop()` vs `del`
| Opération | Description | Retourne une valeur ? | Clé absente ? |
|------------|--------------|------------------------|----------------|
| `del d["clé"]` | Supprime la paire clé–valeur | ❌ Non | ❌ Lève `KeyError` |
| `d.pop("clé")` | Supprime la paire clé–valeur et **renvoie la valeur** | ✅ Oui | ⚠️ Lève `KeyError` si pas de valeur par défaut |
| `d.pop("clé", valeur_par_defaut)` | Supprime si la clé existe, sinon renvoie `valeur_par_defaut` | ✅ Oui | ✅ Sûr |

### Exemple :
```python
d = {"a": 1, "b": 2}

del d["a"]             # supprime sans retour
val = d.pop("b")       # supprime et renvoie 2
val2 = d.pop("x", 0)   # renvoie 0 car 'x' n'existe pas
```

---

## 🔄 Parcours
```python
for cle in d:
    print(cle)

for cle, valeur in d.items():
    print(cle, valeur)

for valeur in d.values():
    print(valeur)
```

---

## 🧩 Méthodes utiles
| Méthode | Description | Exemple |
|----------|--------------|----------|
| `d.keys()` | Vue sur les clés | `dict_keys(['a', 'b'])` |
| `d.values()` | Vue sur les valeurs | `dict_values([1, 2])` |
| `d.items()` | Vue sur les paires (clé, valeur) | `[('a', 1), ('b', 2)]` |
| `d.update(d2)` | Fusionne deux dictionnaires | `d.update({"c": 3})` |
| `d.popitem()` | Supprime le dernier élément ajouté | |
| `len(d)` | Nombre d’éléments | |

---

## 🧠 Vérifications
```python
"a" in d          # True si 'a' est une clé
"z" not in d      # True si 'z' n'est pas une clé
```

---

## ⚙️ Copie
```python
d2 = d.copy()     # copie superficielle
import copy
d3 = copy.deepcopy(d)  # copie profonde (si valeurs imbriquées)
```

---

## 🧮 Dictionnaires imbriqués
```python
etudiants = {
    "Alice": {"age": 22, "ville": "Lyon"},
    "Bob": {"age": 24, "ville": "Paris"}
}

print(etudiants["Alice"]["ville"])  # → Lyon
```

---

## 🧠 Exemples pratiques
### 1. Compter des occurrences
```python
texte = "bonjour bonjour salut"
compte = {}
for mot in texte.split():
    compte[mot] = compte.get(mot, 0) + 1
# {'bonjour': 2, 'salut': 1}
```

### 2. Inverser un dictionnaire
```python
d = {"a": 1, "b": 2}
inverse = {v: k for k, v in d.items()}  # {1: 'a', 2: 'b'}
```

### 3. Fusion moderne (Python ≥ 3.9)
```python
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}
fusion = d1 | d2  # {'a': 1, 'b': 3, 'c': 4}
```

---

## 💡 Astuce
Les dictionnaires conservent **l’ordre d’insertion** depuis Python 3.7.

---

## 📚 Voir aussi
- [Documentation officielle Python – dict](https://docs.python.org/fr/3/library/stdtypes.html#mapping-types-dict)
- [PEP 584 – Union Operators for dict](https://peps.python.org/pep-0584/)
