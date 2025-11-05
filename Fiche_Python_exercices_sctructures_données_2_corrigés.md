# ✅ Corrigés — Exercices Structures de données Python (niveau intermédiaire)

## 🎯 Remarque
Chaque correction indique le **choix de structures**, une **courte justification**, puis une **implémentation de référence** (claire et modulaire).

---

## 🧮 Exercice 1 — Carnet d’adresses
**Choix :** `list[dict]` pour la lisibilité et l’évolutivité ; index secondaire `dict[str, list]` pour regroupement par ville si besoin.
```python
# Modèle
contacts = [
    {"prenom": "Alice", "nom": "Dupont", "tel": "0600000001", "ville": "Nice"},
    {"prenom": "Bob",   "nom": "Martin", "tel": "0600000002", "ville": "Paris"},
]

def ajouter_contact(contacts, prenom, nom, tel, ville):
    # éviter doublons exacts : même nom + tel
    if any(c["nom"] == nom and c["tel"] == tel for c in contacts):
        return False
    contacts.append({"prenom": prenom, "nom": nom, "tel": tel, "ville": ville})
    return True

def rechercher_par_nom(contacts, nom):
    return [c for c in contacts if c["nom"].lower() == nom.lower()]

def rechercher_par_ville(contacts, ville):
    return [c for c in contacts if c["ville"].lower() == ville.lower()]
```
---

## 📚 Exercice 2 — Inventaire d’une librairie
**Choix :** `dict[isbn -> dict]` pour accès O(1) par ISBN et mises à jour.
```python
inventaire = {
    "9780007117116": {"titre": "Le Seigneur des Anneaux", "stock": 5},
}

def ajouter_ou_incrementer(inventaire, isbn, titre, quantite=1):
    livre = inventaire.get(isbn)
    if livre:
        livre["stock"] += quantite
    else:
        inventaire[isbn] = {"titre": titre, "stock": quantite}

def supprimer_si_epuise(inventaire, isbn):
    if isbn in inventaire and inventaire[isbn]["stock"] <= 0:
        del inventaire[isbn]

def livre_max_stock(inventaire):
    return max(inventaire.items(), key=lambda kv: kv[1]["stock"])  # (isbn, {...})
```
---

## 🚗 Exercice 3 — Gestion d’un parking
**Choix :** `set` pour unicité et tests rapides ; tri via `sorted()` lors de l’affichage.
```python
parking = set()

def entree(parking, plaque):
    parking.add(plaque)

def sortie(parking, plaque):
    parking.discard(plaque)  # pas d'erreur si absente

def plaques_triees(parking):
    return sorted(parking)
```
---

## 🎧 Exercice 4 — Playlist musicale intelligente
**Choix :** `list` + `set` (ordre + unicité). Sauvegarde immuable via `tuple`.
```python
class Playlist:
    def __init__(self):
        self._ordre = []       # list pour l'ordre d'écoute
        self._uniques = set()  # contrôle des doublons

    def ajouter(self, piste):
        if piste not in self._uniques:
            self._ordre.append(piste)
            self._uniques.add(piste)

    def supprimer(self, piste):
        if piste in self._uniques:
            self._uniques.remove(piste)
            self._ordre.remove(piste)

    def afficher(self):
        return list(self._ordre)

    def snapshot_immuable(self):
        return tuple(self._ordre)  # version figée
```
---

## 🍽️ Exercice 5 — Réservations de restaurant
**Choix :** `dict[date -> dict[nom -> reservation]]` pour empêcher doublons par jour.
```python
# date: str "2025-11-05", réservation: dict
reservations = {}

def ajouter_reservation(reservations, nom, date, nb):
    jour = reservations.setdefault(date, {})
    if nom in jour:  # déjà réservé ce jour
        return False
    jour[nom] = {"nom": nom, "date": date, "nb": nb}
    return True

def reservations_par_date(reservations, date):
    return list(reservations.get(date, {}).values())
```
---

## 🧾 Exercice 6 — Analyse de mots d’un texte
**Choix :** `dict[str -> int]` pour fréquences + `set` pour mots uniques.
```python
import re

def analyser_texte(texte):
    mots = re.findall(r"[\wÀ-ÖØ-öø-ÿ']+", texte.lower())
    freq = {}
    for m in mots:
        freq[m] = freq.get(m, 0) + 1
    uniques = set(freq.keys())
    mot_max = max(freq, key=freq.get) if freq else None
    top5 = sorted(freq.items(), key=lambda kv: kv[1], reverse=True)[:5]
    return {
        "uniques": uniques,
        "mot_le_plus_frequent": (mot_max, freq[mot_max]) if mot_max else None,
        "top5": top5
    }
```
---

## 💰 Exercice 7 — Panier d’e-commerce
**Choix :** `dict[id -> dict]` pour MAJ rapides ; figer via `frozenset` de tuples.
```python
panier = {}  # id -> {"prix": float, "qte": int}

def ajouter(panier, pid, prix, qte=1):
    item = panier.get(pid, {"prix": prix, "qte": 0})
    item["qte"] += qte
    item["prix"] = prix  # rafraîchir le prix si besoin
    panier[pid] = item

def supprimer(panier, pid):
    panier.pop(pid, None)

def total(panier):
    return sum(i["prix"] * i["qte"] for i in panier.values())

def snapshot_immuable(panier):
    # figer le panier : ensemble immuable de paires (id, (prix, qte))
    return frozenset((pid, (i["prix"], i["qte"])) for pid, i in panier.items())
```
---

## 🗳️ Exercice 8 — Comptage de votes
**Choix :** `dict[electeur -> candidat]` pour garantir un seul vote par électeur, puis `dict[candidat -> int]` pour le comptage.
```python
def compter_votes(paires):
    # paires: list[tuple(electeur, candidat)]
    dernier_vote = {}  # écrase d'éventuels doublons, ou utilise "if not in"
    for e, c in paires:
        if e not in dernier_vote:  # si on doit ignorer les duplicatas
            dernier_vote[e] = c
    # comptage
    scores = {}
    for c in dernier_vote.values():
        scores[c] = scores.get(c, 0) + 1
    # gagnants (gestion ex-aequo)
    if not scores:
        return {}, []
    maxv = max(scores.values())
    gagnants = [c for c, v in scores.items() if v == maxv]
    return scores, gagnants
```
---

## 🏫 Exercice 9 — Notes d’étudiants
**Choix :** `dict[nom -> list[float]]` pour regrouper, puis calcul des moyennes.
```python
def agreger_notes(rows):
    # rows: list[tuple(nom, matiere, note)]
    par_etudiant = {}
    for nom, mat, note in rows:
        par_etudiant.setdefault(nom, []).append(float(note))
    moyennes = {n: (sum(notes)/len(notes)) for n, notes in par_etudiant.items()}
    top3 = sorted(moyennes.items(), key=lambda kv: kv[1], reverse=True)[:3]
    return par_etudiant, moyennes, top3
```
---

## 🧩 Exercice 10 — Réseau de transport (graphe non orienté)
**Choix :** **Graphe d’adjacence** via `dict[str -> set[str]]` (rapide et expressif).
```python
def ajouter_station(graphe, station):
    graphe.setdefault(station, set())

def connecter(graphe, a, b):
    graphe.setdefault(a, set()).add(b)
    graphe.setdefault(b, set()).add(a)

def voisins(graphe, station):
    return graphe.get(station, set())

def sont_connectees(graphe, src, dst):
    if src == dst:
        return True
    vus, stack = set([src]), [src]
    while stack:
        s = stack.pop()
        for v in graphe.get(s, set()):
            if v == dst:
                return True
            if v not in vus:
                vus.add(v)
                stack.append(v)
    return False

# Exemple d'usage
graphe = {}
ajouter_station(graphe, "A"); ajouter_station(graphe, "B"); ajouter_station(graphe, "C")
connecter(graphe, "A", "B"); connecter(graphe, "B", "C")
# voisins(graphe, "B") -> {"A", "C"},  sont_connectees(graphe, "A", "C") -> True
```
---

## 📌 Récap des choix structurants
- **Ordre** → `list`, **unicité** → `set`, **accès direct** → `dict`, **immutabilité** → `tuple`/`frozenset`  
- **Indexation par identifiant** → `dict[id -> {...}]`  
- **Groupement** → `dict[key -> list/set]` selon ordre vs unicité  
- **Historisation immuable** → `tuple`/`frozenset` (snapshots)

---

🕓 *Mise à jour : Novembre 2025*
