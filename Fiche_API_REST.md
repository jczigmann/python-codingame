# 🌍 Fiche API REST – Principes, Utilisation et Tests Automatisés

## 🎯 Objectif
Comprendre le fonctionnement des **API REST**, leurs composants, et savoir les tester dans différents environnements (Python / Java / Robot Framework).

---

## 🧱 1. Qu’est-ce qu’une API REST ?

### 🔹 Définition
**REST** (*Representational State Transfer*) est un style d’architecture d’échange de données entre systèmes via **HTTP**.

Elle repose sur :
- Des **ressources** (utilisateurs, produits, commandes…)
- Des **opérations standardisées** (`GET`, `POST`, `PUT`, `DELETE`)
- Des **représentations** (souvent au format JSON)

### 🔹 Exemple simple
```http
GET https://api.example.com/users/1
```
→ renvoie la ressource *utilisateur n°1* sous forme JSON.

---

## 🧩 2. Les opérations principales (méthodes HTTP)

| Méthode | Action | Exemple | Idempotent ? |
|----------|---------|----------|---------------|
| `GET` | Lire une ressource | `/users/1` | ✅ |
| `POST` | Créer une ressource | `/users` | ❌ |
| `PUT` | Remplacer une ressource | `/users/1` | ✅ |
| `PATCH` | Modifier partiellement | `/users/1` | ❌ |
| `DELETE` | Supprimer | `/users/1` | ✅ |

📘 *Idempotent* : le même appel plusieurs fois donne le même résultat (utile pour les tests).

---

## 🗂 3. Structure d’une requête REST
### 🔸 Exemple complet :
```http
POST /users HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Jean",
  "email": "jean@example.com"
}
```

### 🔸 Réponse typique :
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 123,
  "name": "Jean",
  "email": "jean@example.com"
}
```

---

## ⚙️ 4. Codes de retour HTTP utiles

| Code | Signification | Usage typique |
|------|----------------|----------------|
| 200 OK | Succès | `GET`, `PUT`, `PATCH` |
| 201 Created | Ressource créée | `POST` |
| 204 No Content | Suppression réussie | `DELETE` |
| 400 Bad Request | Requête invalide | Données manquantes |
| 401 Unauthorized | Auth manquante | Token absent |
| 403 Forbidden | Accès refusé | Droits insuffisants |
| 404 Not Found | Ressource absente | Mauvais ID |
| 500 Internal Server Error | Erreur serveur | Bug côté serveur |

---

## 🧾 5. Formats d’échange

| Format | Description | Exemple |
|--------|--------------|----------|
| **JSON** | Léger, lisible, standard web | `{"id":1,"nom":"Jean"}` |
| **XML** | Plus verbeux, encore utilisé en SI | `<user><id>1</id></user>` |
| **YAML** | Configurations (rare pour les API) | `id: 1` |
| **Form-Data** | Fichiers, formulaires HTML | clé=valeur&autre=valeur |

---

## 🧩 6. REST vs SOAP vs GraphQL

| Critère | REST | SOAP | GraphQL |
|----------|------|------|----------|
| Transport | HTTP | HTTP / SMTP | HTTP |
| Format | JSON / XML | XML | JSON |
| Simplicité | ✅ Facile | ❌ Complexe | ✅ Flexible |
| Standard | De facto | Ancien standard W3C | Nouveau standard |
| Usage typique | Web, mobile, microservices | SI bancaires | Apps modernes |

---

## 🧰 7. Tester une API REST

### 🧪 a. En ligne de commande
```bash
curl -X GET https://api.example.com/users/1 -H "Accept: application/json"
```

### 🧪 b. Avec Postman / Insomnia
Outils graphiques pour tester et documenter des endpoints.

---

## 🐍 8. Tests automatisés – Python (Pytest + Requests)
```python
import requests

def test_get_user():
    response = requests.get("https://api.example.com/users/1")
    assert response.status_code == 200
    data = response.json()
    assert "email" in data
```

➡️ Avantages :
- Simple, lisible
- Facile à intégrer dans CI/CD
- Compatible avec `pytest` et `allure` pour les rapports

---

## ☕ 9. Tests automatisés – Java (RestAssured + JUnit/TestNG)
```java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTest {
    @Test
    public void getUser() {
        given()
            .when().get("https://api.example.com/users/1")
            .then().statusCode(200)
            .body("email", containsString("@example.com"));
    }
}
```

➡️ RestAssured simplifie énormément les tests REST côté Java.

---

## 🤖 10. Tests automatisés – Robot Framework
```robot
*** Settings ***
Library     RequestsLibrary

*** Variables ***
${API_URL}  https://api.example.com

*** Test Cases ***
Test GET User
    ${response}=  GET  ${API_URL}/users/1
    Should Be Equal As Integers  ${response.status_code}  200
    Dictionary Should Contain Key  ${response.json()}  email
```

➡️ Très lisible, excellent pour les équipes non-développeurs.

---

## 🔄 11. Bonnes pratiques REST utiles en tests
- Toujours vérifier le **code de statut** et le **contenu JSON**
- Valider les **en-têtes HTTP** (`Content-Type`, `Authorization`, etc.)
- Tester les **cas limites** : requête invalide, ID inexistant, etc.
- Automatiser les **tests CRUD** (Create, Read, Update, Delete)
- Utiliser des **données de test isolées** (mock, sandbox)

---

## 🧠 12. Dans quel contexte ?
| Contexte | Exemple d’utilisation REST | But du test |
|-----------|-----------------------------|--------------|
| **Web** | Authentification, API backend | Vérifier les endpoints |
| **Mobile** | Requêtes serveur REST | Simulation côté client |
| **IoT** | Relevés de capteurs | Vérification JSON et latence |
| **Microservices** | Services entre eux | Validation contractuelle |
| **CI/CD** | Postman CLI, pytest, RestAssured | Vérification automatique avant déploiement |

---

## 📚 13. Outils et bibliothèques utiles
| Langage | Librairie | Description |
|----------|------------|--------------|
| Python | `requests`, `pytest`, `responses` | Tests REST simples |
| Java | `RestAssured`, `HttpClient` | Tests contractuels |
| JS/TS | `Axios`, `Supertest`, `Playwright` | Front + backend |
| Robot | `RequestsLibrary` | No-code / low-code testing |
| Outils externes | Postman, Newman, Swagger, Insomnia | Documentation et tests manuels |

---

## 💡 À retenir
- REST est un **style architectural**, pas un protocole.  
- Il repose sur **HTTP + JSON** pour manipuler des ressources.  
- Les tests REST visent à **valider le contrat** (statut, données, cohérence).  
- En automatisation, REST est omniprésent — à la fois dans les tests backend, API, et CI/CD.

---

📘 **Références**
- [MDN Web Docs – REST](https://developer.mozilla.org/fr/docs/Glossary/REST)
- [RFC 7231 – HTTP/1.1 Semantics](https://datatracker.ietf.org/doc/html/rfc7231)
- [Postman Learning Center](https://learning.postman.com/)
- [RestAssured Documentation](https://rest-assured.io/)
- [Robot Framework RequestsLibrary](https://marketsquare.github.io/robotframework-requests/)
