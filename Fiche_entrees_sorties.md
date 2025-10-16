# Entrées / Sorties

## Lecture d'entrée
```python
n = int(input())
a, b = map(int, input().split())
```

## Lecture multiple
```python
for i in range(n):
    ligne = input()
    print(ligne)
```

## Lecture liste
```python
nombres = [int(x) for x in input().split()]
```

## Affichage
```python
nom = "Alice"
age = 30
print(f"{nom} a {age} ans")
```

Astuce : sur Codingame, tout se fait via input() et print().
