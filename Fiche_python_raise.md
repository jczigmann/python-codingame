# 🐍 Fiche Python – Lever des exceptions avec `raise`

## 🎯 Rôle
L’instruction `raise` sert à **signaler une erreur** dans ton programme, en levant une **exception**.  
Une exception interrompt l’exécution normale du code jusqu’à ce qu’elle soit **gérée** par un bloc `try/except`.

---

## 🧩 1. Lever une exception standard

```python
def division(a, b):
    if b == 0:
        raise ValueError("La division par zéro est interdite")
    return a / b
```

🟢 Utilisation :
```python
print(division(10, 2))   # OK
print(division(10, 0))   # ❌ ValueError
```

---

## ⚙️ 2. Lever sans message

```python
raise RuntimeError
```

➡️ Affiche : `RuntimeError`

---

## 🧱 3. Créer et lever une exception personnalisée

```python
class MonErreur(Exception):
    pass

def verifier_nom(nom):
    if not nom:
        raise MonErreur("Le nom ne peut pas être vide")

verifier_nom("")  # ❌ MonErreur: Le nom ne peut pas être vide
```

---

## 🔁 4. Relancer une exception capturée

```python
try:
    x = int("abc")
except ValueError as e:
    print("Erreur détectée :", e)
    raise  # Relance la même exception
```

---

## 🧮 5. Exemple complet avec gestion hiérarchique

```python
def calculer(x, y):
    try:
        if y < 0:
            raise ValueError("y ne peut pas être négatif")
        return x / y
    except ValueError as e:
        print("Erreur :", e)
        raise  # Relance pour traitement supérieur

try:
    calculer(5, -3)
except Exception as e:
    print("Exception finale :", e)
```

---

## 🧰 Exceptions courantes à connaître

| Exception           | Signification |
|----------------------|----------------|
| `ValueError`         | Valeur invalide pour une fonction |
| `TypeError`          | Mauvais type d’objet |
| `IndexError`         | Index hors limites d’une liste |
| `KeyError`           | Clé absente dans un dictionnaire |
| `FileNotFoundError`  | Fichier introuvable |
| `ZeroDivisionError`  | Division par zéro |
| `RuntimeError`       | Erreur d’exécution générique |
| `AssertionError`     | Échec d’une assertion (`assert`) |

---

## 💡 Astuce
Tu peux combiner `raise` avec `assert` pour des vérifications rapides :

```python
assert x > 0, "x doit être positif"
```
➡️ Équivaut à :
```python
if not x > 0:
    raise AssertionError("x doit être positif")
```
