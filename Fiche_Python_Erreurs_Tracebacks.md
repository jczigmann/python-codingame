# 🐍 Comprendre et maîtriser l'affichage des erreurs en Python

## 🎯 Objectif
Apprendre à **lire, comprendre et exploiter les erreurs (exceptions)** en Python grâce à des explications, exemples et exercices corrigés.

---

# 1️⃣ Mécanisme d'affichage des erreurs (traceback)

Quand une erreur survient et qu’elle n’est pas gérée par un `try/except`, Python affiche un **traceback** :

```
Traceback (most recent call last):
  File "main.py", line 12, in <module>
    lance()
  File "main.py", line 8, in lance
    parse("abc")
  File "main.py", line 3, in parse
    return int(s)
ValueError: invalid literal for int() with base 10: 'abc'
```

- Chaque ligne indique un **appel de fonction** (du plus ancien en bas au plus récent en haut).  
- Le **dernier bloc** montre : `TypeErreur: message`  
- C’est cette dernière ligne qui décrit la cause principale.

---

# 2️⃣ Propagation et gestion des exceptions

## Exemple simple
```python
def division(a, b):
    if b == 0:
        raise ZeroDivisionError("Division par zéro interdite")
    return a / b

print(division(4, 2))
print(division(4, 0))
```

➡️ Le programme s'arrête à la deuxième ligne avec un `ZeroDivisionError`.

---

# 3️⃣ Exemples de traçage

## Exemple 1 — propagation
```python
def c():
    raise ValueError("Valeur invalide")

def b():
    c()

def a():
    b()

a()
```
➡️ Le traceback montre la chaîne complète `a → b → c → erreur`.

---

# 4️⃣ Chaînage explicite (`raise ... from ...`)

```python
def lire_config(path):
    raise FileNotFoundError(path)

def initialiser():
    try:
        lire_config("config.yaml")
    except FileNotFoundError as e:
        raise RuntimeError("Impossible de démarrer") from e

initialiser()
```

- `from e` : garde la trace de la cause initiale.
- `from None` : supprime le chaînage à l’affichage.

---

# 5️⃣ Lecture pratique du traceback

✅ **Lire du bas vers le haut.**  
✅ Identifier la **ligne fautive**.  
✅ Comprendre le **type** d’erreur et le **message**.  
✅ Si l’erreur est récurrente : ajouter un `try/except` ou des vérifications.

---

# 🧩 Exercices pratiques

## Exercice 1 — Lecture de base
```python
def parse_int(s): return int(s)
def lance(): return parse_int("12a")
lance()
```
### ➕ Questions
a) Quel est le type d’exception ?  
b) Quelle ligne déclenche l’erreur ?  
c) Comment corriger ?

---

## Exercice 2 — Pile d’appels
```python
def a(): b()
def b(): c(10, 0)
def c(x, y): return x // y
a()
```
### ➕ Questions
a) Quelle est la cause ?  
b) Quelle est la chaîne d’appels ?

---

## Exercice 3 — Chaînage explicite
```python
def lire_fichier(p):
    raise FileNotFoundError(p)

def main():
    try:
        lire_fichier("config.yaml")
    except FileNotFoundError as e:
        raise RuntimeError("Impossible d'initialiser l'appli") from e

main()
```
### ➕ Questions
a) Que montre le traceback concernant la cause ?  
b) Quelle différence entre `from e` et `from None` ?

---

## Exercice 4 — Relancer une exception
```python
def safe_div(a, b):
    try:
        return a / b
    except ZeroDivisionError as e:
        print("Division invalide, on relance…")
        raise
safe_div(3, 0)
```
### ➕ Questions
a) Que s'affiche avant le traceback ?  
b) Pourquoi relancer peut être utile ?

---

## Exercice 5 — Enrichir le message
Écris une fonction :
```python
def parse_positive_int(s):
    i = int(s)
    if i <= 0:
        raise ValueError(f"Doit être un entier positif, reçu: {s}")
    return i
```
Teste avec `"abc"` puis `"-3"`. Observe les messages.

---

## Exercice 6 — Logger sans interrompre
```python
import logging
logging.basicConfig(level=logging.INFO)

def f(): return 1/0

try:
    f()
except Exception:
    logging.exception("Erreur dans f")
print("Le programme continue.")
```
➡️ Observe l’ordre d’affichage.

---

## Exercice 7 — __cause__ et __context__
```python
try:
    raise KeyError("clé manquante")
except KeyError as e:
    raise ValueError("mauvaise config") from e
```
Compare avec une version **sans** `from e`.

---

## Exercice 8 — Limiter la trace
```python
import sys
sys.tracebacklimit = 1

def a(): b()
def b(): c()
def c(): raise RuntimeError("Oups")

a()
```
➡️ Observe la différence d’affichage.

---

# 🧩 SOLUTIONS

## Exercice 1
a) `ValueError`  
b) ligne `int(s)` dans `parse_int`  
c) Nettoyer la chaîne avant conversion ou vérifier son contenu.

## Exercice 2
a) `ZeroDivisionError`  
b) Appels : `a()` → `b()` → `c()` → erreur sur `x // y`

## Exercice 3
a) Le traceback affiche deux blocs : la cause (`FileNotFoundError`) et la nouvelle (`RuntimeError`).  
b) `from None` supprime la cause d’origine de l’affichage.

## Exercice 4
a) Le message “Division invalide…” apparaît avant le traceback.  
b) Utile pour **logger** et **suivre** l’erreur tout en la laissant remonter.

## Exercice 5
Les messages changent selon la cause :  
- `"abc"` → `ValueError: invalid literal for int()`  
- `"-3"` → `ValueError: Doit être un entier positif, reçu: -3`

## Exercice 6
Le logging affiche la trace avec `[ERROR]` mais le programme continue ensuite.

## Exercice 7
- Avec `from e` → `__cause__` est la première exception.  
- Sans `from e` → `__context__` garde la trace automatique.

## Exercice 8
`tracebacklimit = 1` tronque la pile pour n’afficher que la dernière ligne utile.

---

# 💡 Check-list pour diagnostiquer une erreur

| Étape | Réflexe |
|-------|----------|
| 1 | Regarde le **type** de l’erreur (bas du traceback) |
| 2 | Identifie le **fichier/ligne fautive** |
| 3 | Vérifie les **valeurs d’entrée** |
| 4 | Ajoute des `print()` ou `logging.debug()` |
| 5 | En cas d’erreur récurrente : gère avec `try/except` ou `raise` plus clair |
| 6 | Relis la pile **de bas en haut** pour comprendre le chemin |

---

# ✅ À retenir

- Python affiche toujours un traceback complet.  
- Lis **du bas vers le haut**.  
- `raise`, `try/except` et `logging.exception` sont tes outils clés.  
- Utilise `from e` pour garder la cause.  
- Limite ou personnalise les traces avec `sys.tracebacklimit` ou `sys.excepthook`.

---

*(Fin de la fiche)*
