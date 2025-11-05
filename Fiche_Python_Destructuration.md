# 🧩 Fiche Python — Déstructuration de données (Unpacking)

## 📘 Définition

La **déstructuration** (ou **unpacking**) permet d’**extraire plusieurs valeurs** d’une structure (tuple, liste, etc.) **en une seule instruction**.

C’est l’inverse de la **structuration**, où l’on regroupe plusieurs variables dans une seule structure.

---

## 🔹 Exemple de base avec un tuple

```python
point = (10, 20)
x, y = point   # déstructuration
print(x)  # 10
print(y)  # 20
```

➡️ Ici, Python "déstructure" le tuple `(10, 20)` pour affecter :
- `x = 10`
- `y = 20`

---

## 🔹 Avec une liste

```python
coords = [43.7, 7.26, 120]
lat, lon, alt = coords
print(lat, lon, alt)
```

---

## 🔹 Ignorer certaines valeurs

Tu peux utiliser `_` pour ignorer des éléments inutiles :

```python
user = ("Alice", 25, "France")
name, _, country = user
print(name, country)  # Alice France
```

---

## 🔹 Déstructuration imbriquée

Tu peux déstructurer des structures **imbriquées** :

```python
data = ("Alice", (25, "France"))
name, (age, country) = data
print(age, country)  # 25 France
```

---

## 🔹 Avec une fonction qui retourne plusieurs valeurs

```python
def get_bounds(values):
    return min(values), max(values)

low, high = get_bounds([3, 7, 1, 9])
print(low, high)  # 1 9
```

---

## 🔹 Avec opérateur `*` pour capturer le reste

```python
numbers = [1, 2, 3, 4, 5]
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5
```

---

## 🧠 En résumé

| Terme | Signification |
|--------|----------------|
| **Structuration** | Regrouper plusieurs valeurs dans une seule structure (`(x, y)` ou `[a, b]`) |
| **Déstructuration** | Extraire plusieurs valeurs d’une structure (`x, y = point`) |

---

## 💡 À retenir

> La **déstructuration** permet d’assigner plusieurs variables à partir d’un seul objet itérable.  
> Elle rend le code **plus clair**, **plus concis** et **plus lisible**,  
> en particulier avec les **tuples**, **listes** ou **retours de fonctions**.

---

📄 **Fiche : Structures de données Python**  
🔗 **Section : Déstructuration de données**  
🕓 *Mise à jour : Novembre 2025*
