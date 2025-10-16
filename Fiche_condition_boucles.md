# Conditions et boucles

## Conditions
```python
x = 10
if x > 0:
    print("Positif")
elif x < 0:
    print("Négatif")
else:
    print("Zéro")
```
### Opérateurs logiques
| Opérateur | Signification |
|------------|----------------|
| and | ET logique |
| or | OU logique |
| not | Négation |
| in | Appartenance |

## Boucles
### Boucle for
```python
for i in range(5):
    print(i)
```
### Boucle while
```python
i = 0
while i < 5:
    print(i)
    i += 1
```
### Compréhensions de liste
```python
carres = [x*x for x in range(5)]
pairs = [x for x in range(10) if x % 2 == 0]
```
