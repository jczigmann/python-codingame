# 🧪 Pytest — Les Fixtures (Fiche Récap')

## ✅ Définition

Une **fixture** est une fonction spéciale marquée avec `@pytest.fixture` qui :
- prépare un environnement (setup)
- fournit des données ou des objets aux tests
- peut effectuer un nettoyage après les tests (teardown)
- évite la duplication de code
- est injectée automatiquement via son nom

---

## ✅ Diagramme du fonctionnement


       ┌──────────────┐
       │ Définition   │
       │ @pytest.fixture
       │ def myfx():  │
       │   ...        │
       └───────┬──────┘
               │
               ▼
    ┌────────────────────┐
    │ Test A appelle     │
    │ myfx en paramètre  │
    └───┬────────────────┘
        │
        ▼


┌──────────────────────────┐
│ Pytest instancie la │
│ fixture et l'injecte │
└──────────┬───────────────┘
│
▼
┌──────────────────────────┐
│ Le test s'exécute avec │
│ les données de la fixture│
└──────────┬───────────────┘
│
▼
┌──────────────────────────┐
│ Teardown (si yield) │
└──────────────────────────┘


---

## ✅ Exemple simple

```python
import pytest

@pytest.fixture
def numbers():
    return [1, 2, 3, 4]

def test_sum(numbers):
    assert sum(numbers) == 10

✅ Exemple avec yield (setup + teardown)
@pytest.fixture
def resource():
    print("Setup")
    res = {"state": "open"}

    yield res

    print("Teardown")
    res["state"] = "closed"


Usage :

def test_resource(resource):
    assert resource["state"] == "open"

✅ Fixture avec scope
@pytest.fixture(scope="module")
def db():
    print("Connexion à la base")
    return {"connection": True}


scope="module" → 1 seule instance pour tout le module

✅ Fixture paramétrée
@pytest.fixture(params=[1, 2, 3])
def value(request):
    return request.param

def test_multiple(value):
    assert value in [1, 2, 3]

✅ Fixtures + FastAPI (cas pratique)
from fastapi.testclient import TestClient
from myapp import app
import pytest

@pytest.fixture
def client():
    return TestClient(app)

def test_health(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

✅ Mini-cheatsheet
Syntaxe	Description
@pytest.fixture	Déclare une fixture
def fx():	Nom = injection automatique
yield	Sépare setup/teardown
scope="session"	Fixture unique pour toute la session
request.param	Paramétrer une fixture
pytest --fixtures	Liste toutes les fixtures disponibles
🧠 Exercices
Exercice 1 — Fixture avec dictionnaire

Créer une fixture catalogue (dictionnaire vide) puis un test test_add_item qui ajoute un item "book" et vérifie qu’il est présent.

Exercice 2 — Fixture avec teardown

Créer une fixture counter qui :

initialise une valeur à 0

via yield autorise le test à la modifier

remet cette valeur à 0 en teardown
Afficher la valeur avant et après.

Exercice 3 — Scope

Créer une fixture session_id avec scope "session" et vérifier que tous les tests d’un même fichier reçoivent la même valeur unique.

✅ Corrigés
Corrigé Exercice 1
@pytest.fixture
def catalogue():
    return {}

def test_add_item(catalogue):
    catalogue["book"] = True
    assert "book" in catalogue

Corrigé Exercice 2
@pytest.fixture
def counter():
    value = {"n": 0}
    print("Avant test:", value)
    yield value
    value["n"] = 0
    print("Après test:", value)

def test_counter(counter):
    counter["n"] += 5
    assert counter["n"] == 5

Corrigé Exercice 3
import uuid
import pytest

@pytest.fixture(scope="session")
def session_id():
    return uuid.uuid4()

def test_id_1(session_id):
    assert isinstance(session_id, uuid.UUID)

def test_id_2(session_id):
    assert isinstance(session_id, uuid.UUID)

📌 Astuces

Une fixture peut elle-même utiliser une autre fixture

Tu peux mettre les fixtures dans conftest.py pour les partager entre fichiers

Le nom d’une fixture doit être expressif et clair
