# Révision Python pour tests techniques
Ce document regroupe des fiches de révision Python pour la préparation aux coding games et tests techniques. Il couvre les bases, les structures de données, des algorithmes et de bonnes pratiques, avec exemples, exercices et résumés.
## Table des matières
- [1. Chaînes de caractères](#sec1)
- [2. Listes & tuples](#sec2)
- [3. Dictionnaires & ensembles](#sec3)
- [4. Conditions, boucles et fonctions](#sec4)
- [5. Entrées / sorties](#sec5)
- [6. Compréhensions et générateurs](#sec6)
- [7. Algorithmes de base](#sec7)
- [8. Tips + Fonctions Python les plus utilisées](#sec8)
- [9. Conclusion : stratégie pour réussir un coding game](#sec9)

<a id="sec1"></a>
## 1. Chaînes de caractères
### Bases
```python
s = "Bonjour le monde"
print(s)  # affiche la chaîne
```
### Longueur et accès
```python
len(s)              # longueur
s[0], s[-1]        # premier / dernier
s[0:7]             # slice
s[::-1]            # inversion rapide
```
### Casse et nettoyage
```python
s.lower(); s.upper(); s.title(); s.capitalize(); s.swapcase()
s.strip(); s.lstrip(); s.rstrip()   # retirer espaces
```
### Découper et assembler
```python
s.split()               # par espaces
s.split(',')            # séparateur
'-'.join(['a','b'])     # assembler
```
### Recherche / remplacement / tri
```python
s.find('monde')                  # index ou -1
s.replace('Bonjour', 'Salut')
''.join(sorted(s))               # tri des caractères
''.join(sorted(s, key=str.lower))# tri sans casse
```
### startwith / endwith / 
```python
fichier = "rapport_final.txt"
print (s.endwith('.txt'))                  # True
print (s.endwith('.pdf'))                  # False
```
### Exemples pratiques
```python
text = " Bonjour Le Monde "
clean = text.strip().lower().replace(" ", "_")
# -> bonjour_le_monde
```
### Exercices
- Inverser une chaîne `inverse(s: str) -> str`.
- Trier les caractères `trie(s: str) -> str`.
- Palindrome `est_palindrome(s: str) -> bool`.
### Concepts clés
- Slicing `s[a:b:c]`, `[::-1]` pour inverser.
- `split`/`join` pour parser/assembler.
- `find`, `replace`, `count` utiles.
- Tri sensible à la casse → utiliser `key=str.lower` si besoin.

<a id="sec2"></a>
## 2. Listes & tuples
### Création et base
```python
lst = [3, 1, 2]
tpl = (3, 1, 2)
list(tpl); tuple(lst)
```
### Méthodes utiles (liste)
```python
lst.append(4); lst.extend([5,6])
lst.insert(1, 99)
lst.pop()              # retire le dernier
lst.remove(99)         # retire 1ère occurrence
lst.index(3); lst.count(1)
```
### Tri, renversement, copies
```python
sorted_lst = sorted(lst)      # nouvelle liste
lst.sort(); lst.sort(reverse=True)
lst.reverse()                 # inverse en place
copie = lst[:]                # copie superficielle
```
### Compréhensions (list/dict/set)
```python
[x*2 for x in range(5)]
[x for x in lst if x % 2 == 0]
{x: x*x for x in lst}
{x for x in lst}
```
### Fonctions utiles
```python
sum(lst), min(lst), max(lst)
any(x>0 for x in lst), all(x>=0 for x in lst)
```
### Exercices
- Filtrer pairs `pairs(lst) -> list[int]`.
- Deuxième plus grand `second_max(lst) -> int`.
- Aplatir `aplatir(lol) -> list[int]`.
### Concepts clés
- `sorted` vs `list.sort` (copie vs en place).
- Compréhensions = concis + lisible.
- Tuples immuables, utiles comme clés de dict.
- `any` / `all` pour tests rapides.

<a id="sec3"></a>
## 3. Dictionnaires & ensembles
### Dictionnaires – bases
```python
d = {'a':1, 'b':2}
d['a']                 # accès
d.get('x', 0)          # défaut
d['c'] = 3             # ajout/MAJ
for k, v in d.items(): print(k, v)
```
### Opérations utiles
```python
d.update({'d':4}); 'd' in d
d.keys(); d.values(); d.items()
d2 = {'x':9}; fusion = d | d2       # Python 3.9+
```
### Compter rapidement (Counter)
```python
from collections import Counter
s = 'abracadabra'
compte = Counter(s)
compte.most_common(1)
dict(compte)
```
### Ensembles (set) – unicité
```python
ens = set([1,2,2,3])     # {1,2,3}
ens.add(4); ens.discard(2)
a, b = {1,2,3}, {3,4}
a | b; a & b; a - b
```
### Exercices
- Compter les mots `compter_mots(s) -> dict[str,int]`.
- Valeurs uniques (ordre conservé) `uniques(lst)`.
- Intersection de listes `inter(lst1, lst2)` sans doublons.
### Concepts clés
- `dict` pour associations clé→valeur.
- `set` pour unicité et opérations ensemblistes.
- `Counter` pour fréquences.
- `get` et `update` simplifient le code.

<a id="sec4"></a>
## 4. Conditions, boucles et fonctions
### Conditions
```python
x = 5
if x > 0: print('positif')
elif x == 0: print('zéro')
else: print('négatif')
```
### Boucles
```python
for i in range(3): print(i)    # 0,1,2

n = 3
while n > 0:
    n -= 1
    if n == 1: continue
    if n == 0: break
```
### Fonctions
```python
def aire_rectangle(l, L):
    """Retourne l'aire d'un rectangle"""
    return l * L

def puissance(x, p=2): return x ** p
carre = lambda x: x*x
```
### Bonnes pratiques
```python
# Noms explicites, petites fonctions testables,
# éviter effets de bord, early return si utile.
```
### Exercices
- Somme des positifs `somme_positifs(lst) -> int`.
- FizzBuzz 1..n.
- Factorielle `fact(n)` itérative et récursive.
### Concepts clés
- `if/elif/else` pour décisions.
- `for/while`, `break/continue`.
- `range(start, stop, step)`.
- Docstring, paramètres par défaut, lambda.

<a id="sec5"></a>
## 5. Entrées / sorties
### Lecture depuis l'entrée standard
```python
# n = int(input().strip())
# vals = list(map(int, input().split()))
# import sys; lignes = [l.strip() for l in sys.stdin]
```
### Affichage et formatage
```python
x = 3.14159
print(f"Pi ≈ {x:.2f}")
print('a', 'b', sep='-', end='!')  # a-b!
```
### Fichiers (base)
```python
with open('data.txt', 'r', encoding='utf-8') as f:
    contenu = f.read()

with open('out.txt', 'w', encoding='utf-8') as f:
    f.write('résultat\n')
```
### Exercices
- Lire une liste d'entiers sur une ligne et afficher la somme.
- Formater un pourcentage avec 1 décimale (a/b → "xx.x%").
- Lire n lignes, renvoyer les non vides, `strip()` appliqué.
### Concepts clés
- `input().strip()` pour nettoyer.
- `split()` + `map()` pour parser.
- f-strings pour formater.
- `with open(...)` pour gérer les fichiers proprement.

<a id="sec6"></a>
## 6. Compréhensions et générateurs
### Compréhensions
```python
[x*x for x in range(6)]
[x for x in range(10) if x%2==0]
{x: x*x for x in 'abc'}
{x for x in [1,2,2,3]}
```
### Fonctions utiles
```python
sum(x for x in range(5))
any(x<0 for x in [-1,0,1])
all(x>=0 for x in [0,1,2])
```
### Générateurs (`yield`)
```python
def compteur(max_n):
    n = 0
    while n < max_n:
        yield n
        n += 1

for v in compteur(3): print(v)  # 0,1,2
```
### Exercices
- Carrés pairs de 0..n via compréhension.
- Dictionnaire de fréquences pour une chaîne.
- Générateur des n premiers Fibonacci.
### Concepts clés
- Compréhensions = concises et lisibles.
- Générateurs = paresseux (éco mémoire).
- `any`/`all`/`sum` + générateurs = très utile.

<a id="sec7"></a>
## 7. Algorithmes de base
### Min/Max, tri et recherche
```python
lst = [5,2,9,1]
mn, mx = min(lst), max(lst)
trie = sorted(lst)

def trouve(lst, x):
    for i, v in enumerate(lst):
        if v == x: return i
    return -1

from bisect import bisect_left
idx = bisect_left(trie, 5)
```
### Fibonacci (itératif et récursif)
```python
def fib_iter(n):
    a, b = 0, 1
    res = []
    for _ in range(n):
        res.append(a)
        a, b = b, a + b
    return res

from functools import lru_cache
@lru_cache(maxsize=None)
def fib_rec(k):
    if k < 2: return k
    return fib_rec(k-1) + fib_rec(k-2)
```
### Exercices
- Plus longue chaîne `longest(words) -> str`.
- Max sous-séquence (Kadane) `max_subarray(lst) -> int`.
- Parenthèses valides `valid(s) -> bool` pour `()[]{}`.
### Concepts clés
- Choisir la bonne structure (liste/dict/set).
- Tri et recherche efficaces (`bisect`).
- Itératif souvent plus performant que récursif.
- Mémoïsation avec `lru_cache`.

<a id="sec8"></a>
## 8. Tips + Fonctions Python les plus utilisées
### Tips Coding Game
- Commencer par une version simple qui marche, puis optimiser.
- Gérer les cas limites (vide, zéro, négatifs, grande taille).
- Valider avec quelques tests rapides.
- Noms clairs, fonctions courtes, commentaires sobres.
- Lire l’énoncé et les contraintes de complexité.
### Fonctions courantes
```python
# Core
len, sum, min, max, sorted, reversed
range, enumerate, zip, map, filter
any, all, abs, round
# Structures
set, list, dict, tuple
# Collections / outils
from collections import Counter, defaultdict
from bisect import bisect_left
```

<a id="sec9"></a>
## 9. Conclusion : stratégie pour réussir un coding game
- Lire l’énoncé en entier, repérer I/O, cas limites.
- Esquisser une solution simple, coder par étapes.
- Tester 2–3 cas (inclure frontières).
- Optimiser si besoin (structures adaptées, éviter O(n^2)).
- Soigner lisibilité : fonctions, noms parlants, petits commentaires.

---
*Jean-Charles Zigmann – Fiches Python Coding Game*
