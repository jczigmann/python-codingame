# 🧩 Fiche d’exercices — Structures de données Python (niveau intermédiaire)

## 🎯 Objectif
S’entraîner à **choisir et manipuler les bonnes structures de données** (`list`, `tuple`, `set`, `dict`, etc.) selon le problème posé.

---

### 🧮 Exercice 1 — Carnet d’adresses
Tu veux enregistrer les contacts de tes collègues :
- Chaque contact possède : prénom, nom, numéro de téléphone et ville.
- Tu veux pouvoir :  
  - Ajouter un contact,  
  - Rechercher un contact par nom,  
  - Afficher tous les contacts d’une même ville.

**Questions :**
1. Quelle structure principale utilises-tu ?
2. Comment éviter les doublons de noms ?
3. Écris une fonction `rechercher_par_ville("Nice")` qui retourne les contacts correspondants.

---

### 📚 Exercice 2 — Inventaire d’une librairie
Chaque livre possède un ISBN unique, un titre et une quantité en stock.

**Tâches :**
- Enregistrer les livres dans une structure adaptée.  
- Ajouter un livre ou augmenter sa quantité.  
- Supprimer un livre épuisé.  
- Trouver le livre avec le plus grand stock.

👉 Indice : l’accès rapide par ISBN sera important.

---

### 🚗 Exercice 3 — Gestion d’un parking
Un parking peut contenir jusqu’à 50 véhicules.
- Chaque voiture est identifiée par une plaque unique.
- On veut pouvoir ajouter, retirer et vérifier la présence d’une voiture.
- On souhaite aussi afficher toutes les plaques actuelles triées alphabétiquement.

👉 Quelle structure utiliser ?  
👉 Écris une fonction `entree(plaque)` et `sortie(plaque)`.

---

### 🎧 Exercice 4 — Playlist musicale intelligente
Tu veux créer une playlist avec :
- Un **ordre d’écoute** conservé,
- Aucune chanson dupliquée.

**Tâches :**
- Ajouter une chanson,
- Supprimer une chanson,
- Afficher la playlist actuelle,
- Sauvegarder une version immuable de la playlist (pour l’historique).

👉 Quelle combinaison de structures te semble la plus logique ?

---

### 🍽️ Exercice 5 — Réservations de restaurant
Tu gères les réservations d’un restaurant :
- Chaque réservation contient : un nom, une date, un nombre de personnes.
- Plusieurs réservations peuvent exister pour le même jour.

**Objectifs :**
- Ajouter une réservation,
- Lister toutes les réservations pour une date donnée,
- Empêcher un même client de réserver deux fois le même jour.

---

### 🧾 Exercice 6 — Analyse de mots d’un texte
Tu analyses un texte et veux obtenir :
1. La liste de tous les mots distincts,
2. Le mot le plus fréquent,
3. Les 5 mots les plus fréquents.

**Indice :**
Utilise une structure pour **compter les occurrences** efficacement, et une autre pour **éviter les doublons**.

---

### 💰 Exercice 7 — Panier d’e-commerce
Ton programme gère un panier d’achat :
- Chaque produit a un identifiant, un prix unitaire et une quantité.
- Tu veux pouvoir :
  - Ajouter un produit (ou augmenter sa quantité),
  - Supprimer un produit,
  - Calculer le total du panier.

**Bonus :**
Comment pourrais-tu figer le panier (le rendre non modifiable) au moment de la commande ?

---

### 🗳️ Exercice 8 — Comptage de votes
Tu reçois une liste de votes sous forme de paires `(électeur, candidat)`.  
Chaque électeur ne peut voter qu’une fois.

**Tâches :**
- Supprimer les votes dupliqués par électeur,  
- Compter combien de votes chaque candidat a reçus,  
- Trouver le ou les gagnants.

👉 Quelle combinaison `set`, `dict`, `list` est la plus adaptée ?

---

### 🏫 Exercice 9 — Notes d’étudiants
On te fournit une liste de tuples `(nom, matière, note)`.  
Tu veux obtenir pour chaque étudiant :
- La liste de ses notes,  
- Sa moyenne générale,  
- Les trois meilleurs étudiants.

👉 Quelle structure permettra de regrouper les notes par étudiant efficacement ?

---

### 🧩 Exercice 10 — Réseau de transport
Tu veux représenter un petit réseau de transport :
- Chaque station a un nom unique,
- Les connexions entre stations sont bidirectionnelles.

**Tâches :**
- Ajouter une station et ses connexions,
- Trouver toutes les stations reliées à une autre station,
- Déterminer si deux stations sont connectées (directement ou non).

👉 Comment représenter ce graphe de connexions avec les structures natives ?

---

## 💡 Conseils de résolution
Avant d’écrire ton code :
1. Identifie les **opérations fréquentes** (ajout, recherche, tri, unicité…).  
2. Note si tu as besoin de :
   - **Ordre** → `list`
   - **Unicité** → `set`
   - **Accès direct** → `dict`
   - **Immutabilité** → `tuple` / `frozenset`
3. Combine-les selon la contrainte principale.

---

📄 **Fiche : Exercices Python — Structures de données**  
🔗 **Section : Entraînement au choix des structures**  
🕓 *Mise à jour : Novembre 2025*
