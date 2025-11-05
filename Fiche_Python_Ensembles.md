# 🧩 Fiche Python — Les Ensembles (set)

## 📘 Définition

Un **ensemble** (`set`) est une **collection non ordonnée** d’éléments **uniques et immuables**.  
Il permet de **supprimer automatiquement les doublons** et de faire des **opérations ensemblistes** (union, intersection, etc.).

---

## 🧱 Création d’un ensemble

```python
# Ensemble vide
s = set()

# Ensemble avec des éléments
s = {1, 2, 3}

# Les doublons sont supprimés
s = {1, 2, 2, 3, 3}
print(s)  # {1, 2, 3}

# Conversion depuis une liste
s = set([1, 2, 3, 3])
```

⚠️ Les ensembles **ne conservent pas l’ordre** des éléments  
et **ne peuvent pas contenir de listes, dictionnaires ou autres ensembles** (car non hashables).

---

## 🔍 Accès et parcours

```python
s = {"pomme", "banane", "cerise"}

for fruit in s:
    print(fruit)

print("banane" in s)   # True
print("poire" not in s) # True
```

---

## ⚙️ Méthodes principales

```python
s = {1, 2, 3}
t = {3, 4, 5}

# Ajout / suppression
s.add(4)
s.remove(2)
s.discard(10)   # ne lève pas d’erreur si l’élément n’existe pas
s.clear()       # vide l’ensemble

# Opérations ensemblistes
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # Union → {1, 2, 3, 4, 5}
print(a & b)   # Intersection → {3}
print(a - b)   # Différence → {1, 2}
print(a ^ b)   # Différence symétrique → {1, 2, 4, 5}
```

---

## 🔄 Copie et compréhension d’ensemble

```python
# Copie
s1 = {1, 2, 3}
s2 = s1.copy()

# Compréhension d’ensemble
carres = {x**2 for x in range(5)}
print(carres)  # {0, 1, 4, 9, 16}
```

---

## ⚙️ Ensembles immuables : `frozenset`

```python
fs = frozenset([1, 2, 3])
# fs.add(4) ❌ → erreur : objet immuable
```

`frozenset` est souvent utilisé comme **clé de dictionnaire** ou **élément d’un autre ensemble**.

---

## 🧠 Cas d’utilisation

✅ Supprimer les doublons d’une liste :
```python
l = [1, 2, 2, 3, 3, 4]
unique = set(l)
```

✅ Tester l’appartenance efficacement :
```python
if "Alice" in {"Alice", "Bob", "Charlie"}:
    print("Trouvé !")
```

✅ Comparer des collections :
```python
a = {"python", "c++", "java"}
b = {"python", "rust"}

print(a - b)  # éléments présents dans a mais pas dans b
```

---

## 📚 Résumé

| Action | Syntaxe | Résultat |
|--------|----------|----------|
| Créer un ensemble | `{1, 2, 3}` | Ensemble unique |
| Union | `a | b` | {tous les éléments} |
| Intersection | `a & b` | {communs} |
| Différence | `a - b` | {uniques à a} |
| Différence symétrique | `a ^ b` | {dans un seul des deux} |
| Tester appartenance | `x in s` | True / False |
| Ensemble immuable | `frozenset([...])` | Immuable |

---

## 💡 À retenir

> Les **ensembles (`set`)** sont parfaits pour :
> - Éliminer les **doublons**
> - Tester rapidement l’**appartenance**
> - Faire des **opérations ensemblistes** (union, intersection…)
>
> ⚠️ Non ordonnés, non indexables, et uniquement composés d’éléments **hashables**.

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Ensembles (`set` et `frozenset`)**  
🕓 *Mise à jour : Novembre 2025*
