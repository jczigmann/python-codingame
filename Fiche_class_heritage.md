# 🧬 Fiche Python — Héritage (exemple sur Personne)

---

## ⚙️ 1️⃣ Classe de base : `Personne`

```python
class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def se_presenter(self):
        print(f"Bonjour, je m'appelle {self.nom} et j'ai {self.age} ans.")
```

➡️ Cette classe sert de **modèle parent** : toutes les autres classes pourront **hériter** de ses attributs (`nom`, `age`) et de sa méthode `se_presenter()`.

---

## 🧱 2️⃣ Classe fille : `Employe`

```python
class Employe(Personne):
    def __init__(self, nom, age, poste, salaire):
        super().__init__(nom, age)  # appel du constructeur parent
        self.poste = poste
        self.salaire = salaire

    def se_presenter(self):
        # Redéfinition de la méthode du parent
        print(f"Je suis {self.nom}, {self.poste}, j’ai {self.age} ans et je gagne {self.salaire} €.")
```

➡️ `Employe` hérite de `Personne`, ajoute des **attributs spécifiques** (`poste`, `salaire`), et **modifie le comportement** de `se_presenter()`.

---

## 👩‍🏫 3️⃣ Autre exemple : `Etudiant`

```python
class Etudiant(Personne):
    def __init__(self, nom, age, filiere):
        super().__init__(nom, age)
        self.filiere = filiere

    def se_presenter(self):
        print(f"Je m'appelle {self.nom}, j'ai {self.age} ans et j'étudie en {self.filiere}.")
```

---

## 🚀 4️⃣ Exemple d’utilisation

```python
p1 = Personne("Jean", 45)
e1 = Employe("Luc", 30, "développeur", 3500)
s1 = Etudiant("Emma", 21, "informatique")

p1.se_presenter()
e1.se_presenter()
s1.se_presenter()
```

---

## 🧾 5️⃣ Résultat

```
Bonjour, je m'appelle Jean et j'ai 45 ans.
Je suis Luc, développeur, j’ai 30 ans et je gagne 3500 €.
Je m'appelle Emma, j'ai 21 ans et j'étudie en informatique.
```

---

## 🧠 6️⃣ Points clés à retenir

| Concept | Description | Exemple |
|----------|--------------|----------|
| **Classe parente** | Classe de base | `class Personne:` |
| **Classe fille** | Hérite du parent | `class Employe(Personne):` |
| **super()** | Appelle la méthode du parent | `super().__init__(nom, age)` |
| **Redéfinition** | Change le comportement hérité | `def se_presenter(self):` |
| **Polymorphisme** | Même nom de méthode, effet différent | `se_presenter()` sur chaque classe |

---

## 💡 7️⃣ En résumé

> ✅ L’héritage permet de **réutiliser du code** existant.  
> ✅ La classe fille peut **ajouter ou modifier** des comportements.  
> ✅ `super()` sert à **initialiser la partie héritée**.  
> ✅ Le polymorphisme rend ton code plus **souple et lisible**.

---

🧩 *Astuce bonus :*
Tu peux vérifier le type d’une instance :
```python
isinstance(e1, Personne)   # → True
isinstance(e1, Employe)    # → True
isinstance(e1, Etudiant)   # → False
```
