# 🐍 Fiche Poetry – Gestion de dépendances et packaging Python

## 🎯 Objectif
Poetry simplifie la **gestion des dépendances**, des **environnements virtuels** et la **distribution** des projets Python.

---

## ⚙️ Installation

```bash
pip install poetry
# ou
curl -sSL https://install.python-poetry.org | python3 -
poetry --version
```

---

## 🧱 Commandes principales

| Action | Commande | Description |
|---------|-----------|-------------|
| Créer un projet | `poetry new mon_projet` | Crée l’arborescence du projet |
| Initialiser un projet existant | `poetry init` | Crée `pyproject.toml` |
| Ajouter un package | `poetry add requests` | Installe et ajoute au projet |
| Supprimer un package | `poetry remove numpy` | Désinstalle proprement |
| Installer toutes les dépendances | `poetry install` | Lit `pyproject.toml` |
| Mettre à jour | `poetry update` | Met à jour les paquets |
| Lancer un script | `poetry run pytest` | Exécute une commande dans le venv |
| Ouvrir un shell isolé | `poetry shell` | Entre dans le venv |
| Construire un package | `poetry build` | Crée la distribution |
| Publier sur PyPI | `poetry publish --build` | Publication du package |

---

## 📂 Fichiers clés

- **`pyproject.toml`** → définit les dépendances, la version Python, le nom du projet.  
- **`poetry.lock`** → enregistre les versions exactes installées.

---

## ⚠️ Erreurs fréquentes

- `ModuleNotFoundError` → oublier `poetry install` avant `poetry run`
- Conflit de dépendance → solution : `poetry update`
- Mauvaise version Python → vérifier avec `poetry env info`

---

## 💡 Astuces
- `poetry env use python3.11` → forcer une version Python spécifique  
- `poetry export -f requirements.txt > requirements.txt` → exporter vers pip  
- `poetry show --tree` → voir l’arborescence des dépendances

---

## ❓ Questions typiques Codingame

1. Quelle commande crée un nouveau projet ?  
   → `poetry new mon_projet`

2. Quelle différence entre `poetry install` et `poetry update` ?  
   → `install` installe les versions du lock, `update` les met à jour.

3. Comment exécuter `pytest` dans un environnement Poetry ?  
   → `poetry run pytest`

4. À quoi sert le fichier `poetry.lock` ?  
   → À figer les versions exactes des dépendances.

5. Quelle commande permet d’entrer dans le venv Poetry ?  
   → `poetry shell`

---

📘 **Fichier : fiche_poetry.md**
