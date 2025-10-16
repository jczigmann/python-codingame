# 🐍 Fiche Python – Fonctions variables et anonymes

## 🔹 `*args` et `**kwargs`

En Python, `*` et `**` permettent à une fonction d’accepter un **nombre variable d’arguments**.

---

### 🔸 `*args` – Arguments positionnels multiples

`*args` rassemble tous les **arguments positionnels** dans un **tuple**.

```python
def somme(*args):
    print(args)
    return sum(args)

print(somme(1, 2, 3))  # (1, 2, 3) → 6
```

🧠 Ici :
- `args` = `(1, 2, 3)`
- `sum(args)` = `6`

---

### 🔸 `**kwargs` – Arguments nommés multiples

`**kwargs` rassemble tous les **arguments nommés** dans un **dictionnaire**.

```python
def affiche_infos(**kwargs):
    for cle, val in kwargs.items():
        print(cle, "→", val)

affiche_infos(nom="Jean", age=55, ville="Grasse")
```

🧠 Ici :
- `kwargs` = `{'nom': 'Jean', 'age': 55, 'ville': 'Grasse'}`  
Affichage :
```
nom → Jean  
age → 55  
ville → Grasse
```

---

### 🔸 Combiner `*args` et `**kwargs`

```python
def exemple(a, b, *args, **kwargs):
    print(a, b)
    print(args)
    print(kwargs)

exemple(1, 2, 3, 4, nom="Jean", age=55)
```

Résultat :
```
1 2
(3, 4)
{'nom': 'Jean', 'age': 55}
```

---

### 🔹 Récapitulatif

| Syntaxe | Type d’arguments | Conteneur | Exemple |
|----------|------------------|------------|----------|
| `*args`  | Positionnels multiples | Tuple | `f(1, 2, 3)` |
| `**kwargs` | Nommés multiples | Dictionnaire | `f(nom="Jean", age=55)` |

---

### 💡 Astuce

Tu peux aussi **décomposer** une séquence ou un dictionnaire lors de l’appel :

```python
def addition(a, b, c):
    return a + b + c

valeurs = (1, 2, 3)
print(addition(*valeurs))  # → 6
```

---

## 🧩 Fonctions anonymes – `lambda`

Une **lambda** est une **fonction anonyme**, écrite sur une seule ligne.

---

### 🔸 Syntaxe
```python
lambda arguments: expression
```

➡️ Elle retourne automatiquement le résultat de `expression`.

---

### 🔸 Exemples simples
```python
carre = lambda x: x * x
print(carre(5))   # → 25

addition = lambda a, b: a + b
print(addition(2, 3))  # → 5
```

---

### 🔸 Utilisation typique : tri, map, filter

```python
# Trier une liste de tuples par la 2e valeur
donnees = [(1, 5), (3, 2), (2, 8)]
donnees_triees = sorted(donnees, key=lambda x: x[1])
print(donnees_triees)  # [(3, 2), (1, 5), (2, 8)]
```

```python
# Appliquer une fonction à chaque élément
nombres = [1, 2, 3, 4]
carres = list(map(lambda x: x**2, nombres))
print(carres)  # [1, 4, 9, 16]
```

```python
# Garder uniquement les pairs
pairs = list(filter(lambda x: x % 2 == 0, nombres))
print(pairs)  # [2, 4]
```

---

### 💡 Astuce

- Utilise `lambda` pour des fonctions **courtes et simples**.  
- Pour des traitements plus longs → préfère `def` pour la lisibilité.

---

🧠 **Résumé :**

| Type | Exemple | Avantage |
|------|----------|-----------|
| `def` | `def f(x): return x+1` | Lisible, réutilisable |
| `lambda` | `lambda x: x+1` | Compacte, anonyme |

---

✏️ **Bonne pratique :**
> Garde tes lambdas courtes (1 expression) et lisibles.  
> Utilise-les surtout avec `map`, `filter`, `sorted`, ou comme callback.
