# 🧪 Fiche Pytest – Framework de tests Python

## 🎯 Objectif
Simplifier et automatiser les tests unitaires en Python avec une syntaxe légère.

---

## ⚙️ Installation

```bash
pip install pytest
# ou avec Poetry :
poetry add --dev pytest
```

---

## 🧱 Commandes principales

| Action | Commande | Description |
|---------|-----------|-------------|
| Lancer tous les tests | `pytest` | Recherche automatique de tests |
| Exécution verbeuse | `pytest -v` | Affiche les noms des tests |
| Exécuter un fichier spécifique | `pytest tests/test_api.py` | Test ciblé |
| Filtrer par mot-clé | `pytest -k "api"` | Exécute les tests contenant “api” |
| Arrêter au premier échec | `pytest -x` ou `--maxfail=1` | Utile pour debug rapide |
| Désactiver les warnings | `pytest --disable-warnings` | Résultats plus lisibles |

---

## 🧩 Structure typique

```
mon_projet/
├── mon_module/
│   └── calculs.py
├── tests/
│   └── test_calculs.py
```

`test_calculs.py` :
```python
from mon_module.calculs import addition

def test_addition():
    assert addition(2, 3) == 5
```

---

## ⚙️ Fichiers de configuration

- `pytest.ini` ou `pyproject.toml` :
```toml
[tool.pytest.ini_options]
testpaths = ["tests"]
addopts = "-v"
```

---

## 💡 Astuces

- `pytest -q` → mode silencieux  
- `pytest -s` → affiche les print()  
- `pytest --maxfail=2 -v` → s’arrête après 2 échecs  
- `pytest --cov=mon_module` → couverture de code (avec `pytest-cov`)  
- Peut être exécuté via Poetry : `poetry run pytest`

---

## ❓ Questions typiques Codingame

1. Comment exécuter uniquement les tests contenant “api” ?  
   → `pytest -k "api"`

2. Quelle est la différence entre `assert` et `pytest.raises` ?  
   → `assert` vérifie une condition, `raises` teste une exception.

3. Que fait l’option `-v` ?  
   → Rend la sortie plus détaillée (verbose).

4. Comment exécuter Pytest via Poetry ?  
   → `poetry run pytest`

5. Où sont recherchés les tests par défaut ?  
   → Dans les fichiers nommés `test_*.py` ou `_test.py` dans le dossier `tests/`.

---

📘 **Fichier : fiche_pytest.md**
