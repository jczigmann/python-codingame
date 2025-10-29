# Poetry - Guide d'utilisation

## Installation de Poetry

```bash
# Linux, macOS, Windows (WSL)
curl -sSL https://install.python-poetry.org | python3 -

# Vérifier l'installation
poetry --version
```

## Créer un nouveau projet

```bash
# Créer un nouveau projet avec structure par défaut
poetry new mon-projet

# Créer un projet dans un dossier existant
poetry init
```

Structure créée par `poetry new`:
```
mon-projet/
├── pyproject.toml
├── README.md
├── mon_projet/
│   └── __init__.py
└── tests/
    └── __init__.py
```

## Gestion des dépendances

### Ajouter des dépendances

```bash
# Ajouter une dépendance de production
poetry add requests
poetry add beautifulsoup4
poetry add "django>=4.0,<5.0"

# Ajouter une dépendance de développement
poetry add --group dev pytest
poetry add --group dev black
poetry add --group dev mypy

# Ajouter depuis un groupe spécifique
poetry add --group docs sphinx
```

### Supprimer des dépendances

```bash
# Supprimer une dépendance
poetry remove requests

# Supprimer une dépendance de dev
poetry remove --group dev pytest
```

### Mettre à jour les dépendances

```bash
# Mettre à jour toutes les dépendances
poetry update

# Mettre à jour une dépendance spécifique
poetry update requests

# Mettre à jour plusieurs dépendances
poetry update requests beautifulsoup4
```

## Fichiers poetry.lock

```bash
# Générer/mettre à jour poetry.lock (sans mettre à jour les versions)
poetry lock --no-update

# Générer poetry.lock avec les dernières versions compatibles
poetry lock

# Vérifier que poetry.lock est à jour avec pyproject.toml
poetry check
```

## Installation des dépendances

```bash
# Installer toutes les dépendances (production + dev)
poetry install

# Installer uniquement les dépendances de production
poetry install --only main

# Installer sans les dépendances de développement
poetry install --without dev

# Installer en mode éditable (pour le développement)
poetry install
```

## Environnements virtuels

```bash
# Activer l'environnement virtuel
poetry shell

# Désactiver l'environnement (dans le shell activé)
exit

# Exécuter une commande dans l'environnement sans l'activer
poetry run python script.py
poetry run pytest
poetry run black .

# Voir l'emplacement de l'environnement virtuel
poetry env info

# Lister les environnements virtuels
poetry env list

# Supprimer l'environnement virtuel
poetry env remove python3.12
```

## Exécuter votre application

### Avec un script défini dans pyproject.toml

```toml
[tool.poetry.scripts]
mon-app = "mon_projet.main:main"
```

```bash
poetry run mon-app
```

### Sans script défini

```bash
poetry run python mon_projet/main.py
poetry run python -m mon_projet.main
```

## Informations sur le projet

```bash
# Afficher les informations du projet
poetry show

# Afficher les dépendances installées
poetry show --tree

# Afficher les informations d'une dépendance spécifique
poetry show requests

# Afficher uniquement les dépendances outdated
poetry show --outdated
```

## Configuration de Poetry

```bash
# Créer l'environnement virtuel dans le dossier du projet
poetry config virtualenvs.in-project true

# Voir toutes les configurations
poetry config --list

# Définir la version de Python
poetry env use python3.12
poetry env use 3.11
```

## Publication de package

```bash
# Build le package (crée dist/)
poetry build

# Publier sur PyPI
poetry publish

# Build et publier en une commande
poetry publish --build

# Publier sur un repository privé
poetry publish --repository mon-repo
```

## Use cases courants

### Démarrer un nouveau projet

```bash
# 1. Créer le projet
poetry new mon-projet
cd mon-projet

# 2. Ajouter les dépendances
poetry add requests beautifulsoup4
poetry add --group dev pytest black

# 3. Installer
poetry install

# 4. Coder et tester
poetry run pytest
```

### Cloner un projet existant

```bash
# 1. Cloner le repository
git clone https://github.com/user/projet.git
cd projet

# 2. Installer les dépendances depuis poetry.lock
poetry install

# 3. Activer l'environnement
poetry shell

# 4. Lancer l'application
poetry run python main.py
```

### Maintenir un projet

```bash
# Vérifier les dépendances obsolètes
poetry show --outdated

# Mettre à jour une dépendance
poetry update requests

# Vérifier la cohérence
poetry check

# Lancer les tests
poetry run pytest

# Formater le code
poetry run black .
```

### Travailler avec plusieurs versions de Python

```bash
# Utiliser Python 3.11
poetry env use 3.11
poetry install

# Utiliser Python 3.12
poetry env use 3.12
poetry install

# Lister les environnements
poetry env list

# Supprimer un environnement
poetry env remove 3.11
```

## Résolution de problèmes

```bash
# Nettoyer le cache
poetry cache clear pypi --all

# Réinstaller toutes les dépendances
poetry install --sync

# Supprimer poetry.lock et recréer
rm poetry.lock
poetry lock

# Vérifier les conflits de dépendances
poetry lock --check

# Mode verbeux pour débogage
poetry install -vvv
```

## Commandes utiles pour le développement

```bash
# Lancer un serveur Python simple
poetry run python -m http.server

# Lancer un shell Python interactif
poetry run python

# Lancer IPython si installé
poetry run ipython

# Exécuter des tests avec coverage
poetry run pytest --cov=mon_projet

# Lancer un linter
poetry run pylint mon_projet/

# Formater le code
poetry run black mon_projet/

# Vérifier les types
poetry run mypy mon_projet/
```

## Fichier pyproject.toml - Exemple complet

```toml
[tool.poetry]
name = "mon-projet"
version = "0.1.0"
description = "Description de mon projet"
authors = ["Votre Nom <email@example.com>"]
readme = "README.md"
license = "MIT"
homepage = "https://github.com/user/mon-projet"
repository = "https://github.com/user/mon-projet"
keywords = ["scraping", "web"]

[tool.poetry.dependencies]
python = "^3.12"
requests = "^2.31.0"
beautifulsoup4 = "^4.12.0"

[tool.poetry.group.dev.dependencies]
pytest = "^8.0.0"
black = "^24.0.0"
mypy = "^1.8.0"

[tool.poetry.scripts]
mon-app = "mon_projet.main:main"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```

## Bonnes pratiques

1. **Toujours committer `poetry.lock`** dans Git pour les applications
2. **Ne jamais modifier `poetry.lock` manuellement**
3. **Utiliser `poetry add`** plutôt que modifier `pyproject.toml` manuellement
4. **Tester après chaque `poetry update`**
5. **Utiliser des groupes de dépendances** pour séparer dev/prod/docs
6. **Définir des contraintes de version** appropriées dans pyproject.toml
7. **Utiliser `poetry shell`** pour activer l'environnement pendant le développement
8. **Exécuter `poetry check`** régulièrement pour vérifier la cohérence

## Différences avec pip

| Fonctionnalité | pip | Poetry |
|----------------|-----|--------|
| Fichier de config | requirements.txt | pyproject.toml |
| Lock file | ❌ | poetry.lock ✅ |
| Gestion env virtuel | Manuel (venv) | Automatique ✅ |
| Résolution dépendances | Basique | Avancée ✅ |
| Publication PyPI | setup.py complexe | Simple ✅ |
| Scripts | ❌ | ✅ |

## Ressources

- Documentation officielle: https://python-poetry.org/docs/
- Guide CLI: https://python-poetry.org/docs/cli/
- Configuration: https://python-poetry.org/docs/configuration/