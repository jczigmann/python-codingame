# 🧩 Fiche Python — Les Tuples

## 📘 Définition

Un **tuple** est une **séquence immuable** d’éléments **ordonnés**.  
Contrairement aux listes (`list`), les tuples **ne peuvent pas être modifiés** une fois créés.

### ✅ Utilisations principales :
- Regrouper des données hétérogènes (ex : coordonnées, dates…)
- Retourner plusieurs valeurs depuis une fonction
- Créer des clés de dictionnaire (car les tuples sont *hashables*)
- Représenter des enregistrements fixes

---

## 🧱 Syntaxe de base

```python
# Création d’un tuple
t = (1, 2, 3)

# Sans parenthèses (tuple implicite)
t = 1, 2, 3

# Tuple à un seul élément (virgule obligatoire)
t = (5,)

# Tuple vide
t = ()
