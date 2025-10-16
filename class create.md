# 🧱 Fiche Python — Créer une classe

---

## ⚙️ 1️⃣ Définition d’une classe simple

```python
class Personne:
    # Méthode spéciale appelée à la création de l’objet
    def __init__(self, nom, age):
        self.nom = nom      # attribut d’instance
        self.age = age

    # Méthode d'instance
    def se_presenter(self):
        print(f"Bonjour, je m'appelle {self.nom} et j'ai {self.age} ans.")
```

---

## 🚀 2️⃣ Création d’un objet (instance)

```python
p1 = Personne("Jean", 45)
p2 = Personne("Emma", 22)

p1.se_presenter()
p2.se_presenter()
```

**Résultat :**
```
Bonjour, je m'appelle Jean et j'ai 45 ans.
Bonjour, je m'appelle Emma et j'ai 22 ans.
```

---

## 🧩 3️⃣ Structure d’une classe Python

```python
class NomDeClasse:
    def __init__(self, param1, param2):
        self.param1 = param1
        self.param2 = param2

    def methode(self):
        # self = référence à l'objet courant
        pass
```

| Élément | Description |
|----------|--------------|
| `class NomDeClasse:` | Déclare une classe |
| `__init__()` | Constructeur appelé automatiquement |
| `self` | Représente l’objet courant |
| `attributs` | Variables associées à chaque instance |
| `méthodes` | Fonctions internes à la classe |

---

## 🧠 4️⃣ Méthodes de classe et statiques

```python
class Compteur:
    total = 0   # attribut de classe (commun à tous les objets)

    def __init__(self):
        Compteur.total += 1

    @classmethod
    def combien(cls):
        print(f"Nombre d’instances : {cls.total}")

    @staticmethod
    def info():
        print("Ceci est une méthode statique.")
```

```python
c1 = Compteur()
c2 = Compteur()
Compteur.combien()   # → Nombre d’instances : 2
Compteur.info()      # → Ceci est une méthode statique.
```

---

## 🧬 5️⃣ Héritage (classe fille)

```python
class Employe(Personne):
    def __init__(self, nom, age, poste):
        super().__init__(nom, age)  # appelle le constructeur parent
        self.poste = poste

    def se_presenter(self):
        print(f"Je suis {self.nom}, {self.poste}, j’ai {self.age} ans.")
```

```python
e1 = Employe("Luc", 30, "développeur")
e1.se_presenter()
```

**Résultat :**
```
Je suis Luc, développeur, j’ai 30 ans.
```

---

## 🧾 6️⃣ Résumé express

| Élément | Rôle | Exemple |
|----------|------|---------|
| Déclarer une classe | Structure de base | `class Voiture:` |
| Créer un objet | Instance | `v = Voiture()` |
| Attribut d’instance | Donnée propre à l’objet | `self.couleur` |
| Méthode | Fonction de la classe | `def demarrer(self):` |
| `__init__` | Constructeur automatique | initialise les attributs |
| Héritage | Classe fille dérivée | `class Fille(Parent):` |
| `super()` | Appelle la classe parente | `super().__init__()` |

---

💡 **En résumé :**
> Une **classe** définit un modèle d’objet.  
> Une **instance** est une utilisation concrète de ce modèle.  
> Le mot-clé `self` représente **l’objet lui-même**.

---

📘 *Astuce bonus :*  
Pour afficher le nom de la classe d’un objet :
```python
print(obj.__class__.__name__)
```
