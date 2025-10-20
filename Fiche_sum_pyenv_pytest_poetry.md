# ⚗️ Fiche complémentaire – Poetry + Pyenv + Pytest

## 🎯 Objectif
Configurer un environnement Python **isolé et reproductible**  
→ Pyenv gère les versions de Python  
→ Poetry gère les dépendances et le venv  
→ Pytest exécute les tests unitaires

---

## 🧩 Étape 1 – Choisir la version Python (Pyenv)

### Installation (Linux / Mac)
```bash
curl https://pyenv.run | bash
# puis ajouter à .bashrc :
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

### Choisir une version
```bash
pyenv install 3.11.4
pyenv local 3.11.4
python --version  # → 3.11.4
```

🧠 Astuce :  
`pyenv local` crée un fichier `.python-version` dans ton projet.

---

## 🧱 Étape 2 – Initialiser le projet Poetry

```bash
poetry init
# ou
poetry new mon_projet
```

Poetry détecte automatiquement la version Python choisie par Pyenv.

Ajouter les dépendances :
```bash
poetry add requests
poetry add --dev pytest
```

Vérifier :
```bash
poetry env info
```

---

## 🧪 Étape 3 – Utiliser Pytest avec Poetry

### Créer un test
`tests/test_sample.py`
```python
def test_addition():
    assert 1 + 1 == 2
```

### Lancer les tests
```bash
poetry run pytest
```

### Exécution directe dans le venv
```bash
poetry shell
pytest -v
```

---

## ⚙️ Étape 4 – Config utile dans `pyproject.toml`

```toml
[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v"
```

---

## 🧠 Résumé rapide

| Étape | Outil | Commande clé |
|--------|--------|---------------|
| Version Python | `pyenv local 3.11.4` | Choisir version Python |
| Créer projet | `poetry new mon_projet` | Initialiser structure |
| Installer dépendances | `poetry install` | Reproduire l’environnement |
| Lancer tests | `poetry run pytest` | Exécuter les tests unitaires |

---

✅ **Pyenv** → version Python exacte  
✅ **Poetry** → gestion dépendances et environnement  
✅ **Pytest** → tests automatisés reproductibles  

---

📘 **Fichier : `fiche_poetry_pyenv_pytest.md`**
> À placer à côté de `fiche_poetry.md` pour tes révisions Codingame.
