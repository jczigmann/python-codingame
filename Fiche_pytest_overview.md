# 🧪 Pytest – Fiche Pratique

> **But :** Simplifier et automatiser les tests Python avec une syntaxe lisible et efficace.

---

## 🔹 1. Introduction

`pytest` est un framework de test Python :
- Compatible avec `unittest`
- Plus concis et plus lisible
- Extensible via plugins
- Parfait pour les tests unitaires, d’intégration et web (ex : Selenium)

---

## 🔹 2. Détection automatique

Quand tu exécutes :

```bash
pytest
```

➡️ `pytest` détecte automatiquement :

- Tous les fichiers `test_*.py` ou `*_test.py`
- Toutes les fonctions `test_*`
- Toutes les classes `Test*` contenant des méthodes `test_*`

---

## 🔹 3. Structure d’un test minimal

```python
def test_addition():
    a = 2 + 3
    assert a == 5
```

✅ Aucun héritage ni classe obligatoire  
✅ `assert` suffit (plus besoin de `self.assertEqual`)

---

## 🔹 4. Fixtures : setup et teardown modernes

```python
import pytest

@pytest.fixture
def sample_data():
    return {"user": "Jean-Charles", "age": 55}

def test_sample(sample_data):
    assert sample_data["user"] == "Jean-Charles"
```

### Variante avec `yield` :
```python
@pytest.fixture
def driver():
    print("→ setup")
    driver = "chromedriver"
    yield driver
    print("← teardown")
```

➡️ Tout avant `yield` = setup  
➡️ Tout après `yield` = teardown

---

## 🔹 5. Lancer pytest

| Action | Commande |
|--------|-----------|
| Tous les tests | `pytest` |
| Un fichier précis | `pytest tests/test_app.py` |
| Un test spécifique | `pytest tests/test_app.py::test_formulaire` |
| Afficher les `print()` | `pytest -s` |
| Mode verbeux | `pytest -v` |
| Stop au premier échec | `pytest -x` |
| Relancer seulement les tests échoués | `pytest --lf` |
| Rapport HTML (plugin requis) | `pytest --html=report.html` |

---

## 🔹 6. Compatibilité avec unittest

Pytest sait exécuter les classes héritées de `unittest.TestCase` :

```python
import unittest

class TestApp(unittest.TestCase):
    def test_formulaire(self):
        self.assertEqual(2 + 2, 4)
```

➡️ Tu peux lancer ces tests avec **`pytest`** sans modification :
```bash
pytest -v
```

---

## 🔹 7. Exemple complet (test web Selenium)

```python
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By

@pytest.fixture(scope="session")
def driver():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless=new")
    drv = webdriver.Chrome(options=options)
    yield drv
    drv.quit()

def test_formulaire(driver):
    driver.get("http://127.0.0.1:5000/")
    champ = driver.find_element(By.NAME, "nom")
    champ.send_keys("Jean-Charles")
    bouton = driver.find_element(By.XPATH, "//button[text()='Envoyer']")
    bouton.click()
    assert "resultat" in driver.current_url
```

---

## 🔹 8. Dans un environnement Poetry

| Action | Commande |
|--------|-----------|
| Lancer pytest | `poetry run pytest` |
| Lancer un test spécifique | `poetry run pytest tests/test_app.py::test_formulaire` |
| Aide interactive | `poetry run python` puis `help(unittest.TestCase)` |
| Doc CLI | `poetry run pydoc unittest.TestCase` |

---

## 🔹 9. Assertions utiles

| Exemple | Vérifie que… |
|----------|---------------|
| `assert a == b` | `a` égal à `b` |
| `assert x in items` | `x` appartient à `items` |
| `assert "ok" in msg.lower()` | sous-chaîne présente |
| `assert not condition` | condition fausse |
| `assert len(lst) > 0` | liste non vide |

---

## 🔹 10. Bonnes pratiques

- Préfère `assert` plutôt que les méthodes `unittest`
- Évite `time.sleep()` → utilise des attentes explicites (`WebDriverWait`)
- Nommes clairement tes tests (`test_login_success`, `test_invalid_password`)
- Isole chaque test (pas d’état partagé entre eux)
- Utilise des fixtures pour factoriser le code

---

## 🔹 11. Plugins utiles

| Plugin | Description |
|---------|-------------|
| `pytest-html` | Génère un rapport HTML |
| `pytest-cov` | Mesure la couverture de code |
| `pytest-xdist` | Exécution parallèle |
| `pytest-mock` | Facilite le mock d’objets |

---

## 🔹 12. Références utiles

- 📘 [Documentation officielle Pytest](https://docs.pytest.org/)
- 🧰 [Plugins Pytest sur PyPI](https://pypi.org/search/?q=pytest)
- 💡 [Cheat Sheet Officielle (pytest.org)](https://docs.pytest.org/en/stable/contents.html)

---

🧠 **En résumé :**
> Avec `pytest`, un simple `assert` remplace toute la lourdeur de `unittest`.  
> Tu peux tester plus vite, avec moins de code, tout en restant compatible avec tes anciens tests.
