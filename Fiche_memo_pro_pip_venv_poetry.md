# 🐍 Fiche pratique – `pip`, `poetry` et `venv` (Pro + CI/CD + Docker)

## 🎯 Objectif
Maîtriser les outils et bonnes pratiques de gestion d’environnements Python :  
`venv`, `pip`, `poetry`, et leur usage en développement **individuel** et **en entreprise** (CI/CD, Docker, GitLab, etc.).

---

## 🧩 1. `venv` — Environnement virtuel

### Commandes essentielles
```bash
python -m venv venv
source venv/bin/activate   # Linux/macOS
venv\Scripts\activate      # Windows
deactivate
```

### Bonnes pratiques
✅ Toujours activer ton venv avant un `pip install`.  
✅ Ne jamais installer de librairies globalement.  
✅ Ajouter `venv/` au `.gitignore`.

---

## 📦 2. `pip` — Gestion standard des dépendances

### Commandes utiles
```bash
pip install numpy
pip freeze > requirements.txt
pip install -r requirements.txt
pip install .     # installe le projet local
pip install -e .  # mode développement
```

### Structure recommandée
```
mon_projet/
├── requirements.txt
├── setup.py
├── src/
│   └── mon_module/
│       └── __init__.py
└── tests/
```

### Bonnes pratiques
- ✅ Toujours geler les versions (`pip freeze > requirements.txt`)
- ✅ Utiliser `pip install -e .` pendant le développement
- ❌ Ne jamais pousser les dépendances système dans Git
- ✅ Utiliser un venv distinct par projet

---

## 🧭 3. `poetry` — Gestionnaire moderne tout-en-un

### Commandes clés
```bash
poetry init               # crée pyproject.toml
poetry add requests        # ajoute une lib
poetry install             # crée le venv et installe les libs
poetry run pytest          # exécute un test dans le venv
poetry export -f requirements.txt --output requirements.txt
```

### Fichiers créés
```
pyproject.toml   # dépendances + config du projet
poetry.lock      # versions exactes des libs
```

---

## 💬 4. Questions pièges d’entretien

| Question | Réponse | À éviter |
|-----------|----------|----------|
| `pip install .` | Installe le package local (setup.py / pyproject.toml) | “Installe les dépendances” ❌ |
| `pip install -r requirements.txt` | Installe les libs listées | Confondre avec ton package |
| Différence pip/poetry ? | pip = gestion de paquets, poetry = gestion complète de projet | Dire que c’est la même chose ❌ |
| `poetry init` vs `poetry new` ? | `init` pour dossier existant, `new` pour projet complet | ❌ confusion |
| Editable install ? | `pip install -e .` → code mis à jour sans réinstaller | ❌ oublier le flag `-e` |

---

## ⚡ 5. Questions avancées

| Sujet | Explication |
|--------|--------------|
| Editable install (`-e`) | Installe ton code source en mode dev (liens symboliques) |
| Extras | `pip install requests[security]` → installe des modules optionnels |
| Dev deps Poetry | `poetry add --group dev pytest` |
| Lock file | Gèle les versions pour reproductibilité |
| Install depuis Git | `pip install git+https://github.com/user/repo.git` |
| Export requirements depuis Poetry | `poetry export -f requirements.txt --output requirements.txt` |
| Supprimer venv Poetry | `poetry env remove python` |

---

## 🧱 6. Bonnes pratiques en entreprise / CI-CD / Docker

### 🔹 A. Organisation projet pro
```
mon_projet/
├── pyproject.toml
├── poetry.lock
├── src/
│   └── mon_module/
│       └── __init__.py
├── tests/
├── Dockerfile
├── .gitlab-ci.yml
└── README.md
```

---

### 🔹 B. Utilisation dans Docker (exemple multi-stage)
```Dockerfile
# Étape 1 : build des dépendances
FROM python:3.12-slim AS builder
WORKDIR /app
COPY pyproject.toml poetry.lock ./
RUN pip install poetry && poetry export -f requirements.txt -o requirements.txt
RUN pip install --prefix=/install -r requirements.txt

# Étape 2 : image finale légère
FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /install /usr/local
COPY src/ ./src/
CMD ["python", "src/main.py"]
```

✅ Avantage :  
- build rapide,  
- image légère,  
- dépendances verrouillées via `poetry.lock`.

---

### 🔹 C. Intégration CI/CD (exemple GitLab)
```yaml
stages:
  - test
  - build

variables:
  PIP_DISABLE_PIP_VERSION_CHECK: "1"
  PIP_NO_CACHE_DIR: "1"

cache:
  paths:
    - .venv/

test:
  stage: test
  image: python:3.12
  script:
    - pip install poetry
    - poetry install
    - poetry run pytest --maxfail=1 --disable-warnings -q

build:
  stage: build
  image: python:3.12
  script:
    - poetry export -f requirements.txt --output requirements.txt
    - pip install -r requirements.txt
```

✅ Avantage :
- Environnements reproductibles  
- Tests automatiques dans le venv Poetry  
- Aucun `pip install` global dans le runner  

---

### 🔹 D. Bonnes pratiques DevOps
| Thème | Bonne pratique |
|--------|----------------|
| Versionner `pyproject.toml` + `poetry.lock` | ✅ Oui |
| Versionner `venv/` | ❌ Non |
| Bloquer versions critiques (`numpy==...`) | ✅ Toujours |
| CI/CD | Toujours utiliser `poetry export` pour les pipelines |
| Docker | Utiliser `poetry export` plutôt que `poetry install` dans l’image finale |
| Build | Multi-stage → plus rapide et propre |
| Production | Pas de `poetry install` → seulement `pip install -r requirements.txt` |

---

### 🔹 E. Astuces pour la reproductibilité
```bash
poetry lock --no-update        # verrouille sans monter de version
poetry export -f requirements.txt > requirements.txt
pip install --no-cache-dir -r requirements.txt
```
➡️ Même environnement entre développeurs et pipeline.

---

## ✅ 7. En résumé

| Outil | Fonction principale | En entreprise |
|--------|----------------------|---------------|
| `venv` | Isolation environnement | Simple et local |
| `pip` | Installation classique | Pour les images Docker finales |
| `poetry` | Gestion complète du projet | Recommandé en dev / CI |
| `requirements.txt` | Reproductibilité | Utilisé en production |
| `poetry.lock` | Versions figées | Base des exports |
| `pip install -e .` | Mode dev editable | Pratique en phase R&D |
