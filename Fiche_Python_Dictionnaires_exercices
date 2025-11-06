# 🧩 Fiche d’Exercices Python – Les Dictionnaires (`dict`)

## 🎯 Objectifs
Savoir :
- Créer et manipuler des dictionnaires  
- Accéder, modifier et supprimer des éléments  
- Parcourir les clés et valeurs  
- Combiner et transformer des dictionnaires  

---

## 🧠 Exercice 1 – Création et accès aux clés
Crée un dictionnaire `voiture` avec les informations suivantes :
- `marque` → "Peugeot"
- `modele` → "208"
- `annee` → 2020

1. Affiche le modèle.  
2. Ajoute une nouvelle clé `couleur` avec la valeur `"bleue"`.  
3. Modifie l’année pour `"2024"`.  

**✅ Correction :**
```python
voiture = {"marque": "Peugeot", "modele": "208", "annee": 2020}
print(voiture["modele"])
voiture["couleur"] = "bleue"
voiture["annee"] = 2024
```

---

## 🧠 Exercice 2 – Suppression d’éléments
Soit le dictionnaire suivant :
```python
stock = {"pommes": 50, "bananes": 30, "oranges": 20}
```

1. Supprime la clé `"bananes"` à l’aide de `pop()`.  
2. Vide le dictionnaire avec une seule méthode.  

**✅ Correction :**
```python
stock.pop("bananes")
stock.clear()
```

---

## 🧠 Exercice 3 – Parcourir un dictionnaire
Écris un code qui affiche les lignes suivantes à partir du dictionnaire :
```python
notes = {"Alice": 15, "Bob": 12, "Chloé": 17}
```
Sortie attendue :
```
Alice -> 15
Bob -> 12
Chloé -> 17
```

**✅ Correction :**
```python
for nom, note in notes.items():
    print(f"{nom} -> {note}")
```

---

## 🧠 Exercice 4 – Compter les occurrences de mots
À partir du texte suivant :
```python
texte = "bonjour bonjour salut coucou salut bonjour"
```
Crée un dictionnaire `frequence` qui compte le nombre d’occurrences de chaque mot.

**✅ Correction :**
```python
frequence = {}
for mot in texte.split():
    frequence[mot] = frequence.get(mot, 0) + 1
# Résultat : {'bonjour': 3, 'salut': 2, 'coucou': 1}
```

---

## 🧠 Exercice 5 – Fusion et mise à jour
Soit :
```python
prix_magasin1 = {"pain": 1.2, "eau": 0.9, "café": 3.5}
prix_magasin2 = {"eau": 1.0, "sucre": 2.0}
```

1. Crée une fusion contenant les dernières valeurs à jour (`eau` doit valoir 1.0).  
2. Vérifie le résultat final.  

**✅ Correction :**
```python
fusion = prix_magasin1 | prix_magasin2  # Python ≥ 3.9
print(fusion)
# {'pain': 1.2, 'eau': 1.0, 'café': 3.5, 'sucre': 2.0}
```

---

## 🧠 Exercice 6 – Dictionnaire imbriqué
Crée un dictionnaire `eleves` contenant deux entrées :
- `"Emma"` → {"age": 20, "ville": "Lyon"}  
- `"Lucas"` → {"age": 22, "ville": "Nice"}

Affiche la ville d’Emma.

**✅ Correction :**
```python
eleves = {
    "Emma": {"age": 20, "ville": "Lyon"},
    "Lucas": {"age": 22, "ville": "Nice"}
}
print(eleves["Emma"]["ville"])  # → Lyon
```

---

## 💪 Bonus – Inverser un dictionnaire
Soit :
```python
d = {"a": 1, "b": 2, "c": 3}
```
Crée un dictionnaire inverse où les clés deviennent les valeurs et inversement.

**✅ Correction :**
```python
inverse = {v: k for k, v in d.items()}
# {1: 'a', 2: 'b', 3: 'c'}
```

---

## 🧾 À retenir
| Action | Méthode |
|---------|----------|
| Ajouter / modifier | `d["clé"] = valeur` |
| Supprimer par clé | `d.pop("clé")` |
| Supprimer sans erreur | `d.pop("clé", None)` |
| Parcourir | `for k, v in d.items()` |
| Fusionner | `d1 | d2` *(Python ≥ 3.9)* |
| Vider | `d.clear()` |

---

📚 **Référence** : [Documentation officielle Python – dict](https://docs.python.org/fr/3/library/stdtypes.html#mapping-types-dict)
