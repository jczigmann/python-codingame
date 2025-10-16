# Fonctions

## Définition
```python
def addition(a, b):
    return a + b
```

## Paramètres par défaut
```python
def dire_bonjour(nom="inconnu"):
    print(f"Bonjour {nom}")
```

## Arguments variables
```python
def somme(*args):
    return sum(args)

def affiche_infos(**kwargs):
    for cle, val in kwargs.items():
        print(cle, "→", val)
```

## Lambda
```python
carre = lambda x: x*x
print(carre(5))
```

## Astuce
Bien structurer ton code en petites fonctions réutilisables.
