# ðŸ Fiche dâ€™exercices â€“ Copinage Python (listes, ensembles, tuples)

## ðŸ§© Exercice 1 â€“ Copinage (niveau intermÃ©diaire)

### ðŸŽ¯ Objectif
Analyser plusieurs listes dâ€™amis pour en extraire des informations Ã  lâ€™aide de **listes**, **ensembles (`set`)** et **tuples**.

---

### ðŸ“ EnoncÃ©

Tu reÃ§ois trois listes dâ€™amis :
```python
groupe1 = ["Alice", "Bob", "Charlie", "Alice"]
groupe2 = ["Bob", "Diane", "Eve"]
groupe3 = ["Charlie", "Eve", "Frank", "Bob"]
```

Affiche :
1. Le **nombre total dâ€™amis** (avec doublons)
2. Le **nombre dâ€™amis uniques**
3. Les **amis communs Ã  tous les groupes**
4. Les **amis prÃ©sents dans au moins deux groupes**
5. La **liste triÃ©e alphabÃ©tiquement** des amis uniques

---

### ðŸš€ Ã€ toi de coder

```python
def analyse_copinage(g1, g2, g3):
    # Ã€ complÃ©ter !
    pass
```

### ðŸ’¡ Aides
- `set(liste)` â†’ supprime les doublons
- `|` â†’ union
- `&` â†’ intersection
- `sorted()` â†’ trie une liste

---

### âœ… Exemple attendu

EntrÃ©e :
```python
analyse_copinage(groupe1, groupe2, groupe3)
```

Sortie :
```
Nombre total d'amis : 11
Nombre d'amis uniques : 6
Amis communs Ã  tous : {'Bob'}
Amis prÃ©sents dans au moins deux groupes : {'Bob', 'Charlie', 'Eve'}
Liste triÃ©e : ['Alice', 'Bob', 'Charlie', 'Diane', 'Eve', 'Frank']
```

---

### ðŸ§© Correction (Ã  rÃ©vÃ©ler aprÃ¨s test)
<details>
<summary>Afficher la solution</summary>

```python
def analyse_copinage(g1, g2, g3):
    total = len(g1) + len(g2) + len(g3)
    uniques = set(g1) | set(g2) | set(g3)
    communs = set(g1) & set(g2) & set(g3)
    deux_groupes = (set(g1) & set(g2)) | (set(g1) & set(g3)) | (set(g2) & set(g3))

    print("Nombre total d'amis :", total)
    print("Nombre d'amis uniques :", len(uniques))
    print("Amis communs Ã  tous :", communs)
    print("Amis prÃ©sents dans au moins deux groupes :", deux_groupes)
    print("Liste triÃ©e :", sorted(uniques))
```
</details>

---

## ðŸ’¡ Exercice 2 â€“ Comptage et tri (niveau facile)

### ðŸŽ¯ Objectif
Ã€ partir dâ€™une liste dâ€™Ã©lÃ¨ves, afficher :
1. Le nombre total dâ€™Ã©lÃ¨ves
2. Le nombre dâ€™Ã©lÃ¨ves uniques
3. La liste triÃ©e des prÃ©noms sans doublons

```python
eleves = ["Alice", "Bob", "Alice", "Diane", "Bob", "Eve"]
```

### ðŸš€ Ã€ complÃ©ter

```python
def tri_eleves(liste):
    pass
```

### ðŸ’¡ Indices
- `len(liste)`
- `set(liste)`
- `sorted(...)`

---

## âš™ï¸ Exercice 3 â€“ Suppression de doublons (niveau intermÃ©diaire)

### ðŸŽ¯ Objectif
CrÃ©er une fonction qui supprime les doublons **tout en conservant lâ€™ordre dâ€™origine**.

EntrÃ©e :
```python
[3, 1, 2, 3, 1, 4, 2]
```
Sortie attendue :
```python
[3, 1, 2, 4]
```

### ðŸš€ Ã€ complÃ©ter

```python
def unique_avec_ordre(liste):
    pass
```

ðŸ’¡ Indice : tu peux utiliser une boucle et tester si un Ã©lÃ©ment est dÃ©jÃ  prÃ©sent dans une **nouvelle liste**.

---

## ðŸ§  Exercice 4 â€“ Paires dâ€™amis (tuples, niveau bonus)

### ðŸŽ¯ Objectif
Ã€ partir dâ€™une liste de prÃ©noms, crÃ©er toutes les **paires possibles dâ€™amis** (sans rÃ©pÃ©tition).

EntrÃ©e :
```python
amis = ["Alice", "Bob", "Charlie"]
```
Sortie :
```python
[("Alice", "Bob"), ("Alice", "Charlie"), ("Bob", "Charlie")]
```

### ðŸš€ Ã€ complÃ©ter

```python
def paires_amis(liste):
    pass
```

ðŸ’¡ Indice :
- Utilise deux boucles imbriquÃ©es
- Utilise un **tuple** `(a, b)` pour chaque paire

---

## ðŸ Pour aller plus loin

- Ajoute une interface console qui demande Ã  lâ€™utilisateur dâ€™entrer les noms dâ€™amis sÃ©parÃ©s par des virgules.
- Exporte les rÃ©sultats dans un fichier `.txt` ou `.json`.

---

âœï¸ **Objectif de cette fiche :**
> Savoir manipuler les **listes**, **ensembles** et **tuples** de maniÃ¨re fluide, un prÃ©requis pour rÃ©ussir de nombreux tests de type **Codingame**.