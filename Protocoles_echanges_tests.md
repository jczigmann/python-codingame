# 🌐 Fiche Python / Java / Robot – Protocoles d’Échange en Automatisation de Tests

## 🎯 Objectif
Comprendre et identifier les **principaux protocoles et formats d’échange** utilisés lors de l’automatisation de tests Web, API ou systèmes distribués.

---

## 🧱 1. HTTP / HTTPS – Le socle du web
Protocole principal pour les échanges entre navigateur, API et serveur.

### 🔹 Formats échangés
- JSON (le plus courant)
- XML
- HTML
- form-data / multipart

### 🔹 Exemples
```python
# Python – Requête HTTP
import requests
r = requests.get("https://api.example.com/users/1")
print(r.status_code, r.json())
```

```java
// Java – RestAssured
given().get("https://api.example.com/users/1").then().statusCode(200);
```

---

## 🔄 2. WebSocket (WS / WSS) – Temps réel
Canal bidirectionnel pour les applis dynamiques (chat, trading, dashboards).

### 🔹 Exemple
```python
import websocket
ws = websocket.WebSocket()
ws.connect("wss://server.example.com/socket")
ws.send("ping")
print(ws.recv())
```

📦 Format : JSON ou binaire (Protobuf, CBOR)

---

## 🧩 3. REST / GraphQL / gRPC – API applicatives

### 🔹 REST
Requêtes HTTP (`GET`, `POST`, `PUT`, `DELETE`) — données au format JSON.

```python
r = requests.post("https://api.example.com/login", json={"user": "a", "pwd": "b"})
print(r.json())
```

### 🔹 GraphQL
Une seule URL, mais requêtes structurées.

```json
{
  "query": "{ user(id:1){ name email } }"
}
```

### 🔹 gRPC
Protocole binaire basé sur HTTP/2 et Protobuf.

```python
import grpc
import user_pb2, user_pb2_grpc

channel = grpc.insecure_channel('localhost:50051')
stub = user_pb2_grpc.UserServiceStub(channel)
response = stub.GetUser(user_pb2.UserRequest(id=1))
```

---

## 🧾 4. SOAP / XML-RPC
Protocoles hérités, encore présents dans les systèmes d’information anciens.

- Format XML transporté sur HTTP.
- Vérification via RobotFramework, SoapUI, ou Java (JAX-WS).

---

## 📬 5. Messaging / MQ / Streaming
Communication asynchrone entre services.

| Protocole | Usage | Outil de test |
|------------|--------|---------------|
| **MQTT** | IoT, capteurs | paho-mqtt |
| **AMQP / RabbitMQ** | files d’attente | pika (Python) |
| **Kafka** | streaming | confluent-kafka |
| **JMS** | Java | jms-test, ActiveMQ |

### Exemple MQTT
```python
import paho.mqtt.client as mqtt
client = mqtt.Client()
client.connect("broker.hivemq.com", 1883, 60)
client.publish("test/topic", "hello")
```

---

## 🗃 6. Base de données (SQL / NoSQL)
Validation des inserts, updates ou requêtes.

```python
import sqlite3
conn = sqlite3.connect("db.sqlite3")
rows = conn.execute("SELECT * FROM users").fetchall()
print(rows)
```

```java
// Java JDBC
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/test","user","pass");
ResultSet rs = conn.createStatement().executeQuery("SELECT * FROM users");
```

---

## 📂 7. Fichiers et transferts (FTP / SFTP / SMB)
Utilisés dans les tests batch et pipelines.

```python
from ftplib import FTP
ftp = FTP('ftp.server.com')
ftp.login('user', 'pass')
ftp.retrlines('LIST')
```

---

## 🔌 8. Protocoles interprocessus
Communication entre processus ou systèmes internes :
- **D-Bus** (Linux)
- **Named Pipes / UNIX Sockets**
- **ZeroMQ (ZMQ)** – tests distribués

---

## 📄 9. Formats de données courants

| Format | Usage principal | Lib Python | Exemple |
|---------|-----------------|-------------|----------|
| **JSON** | REST / WebSocket | `json` | `json.loads(data)` |
| **XML** | SOAP, config | `xml.etree`, `lxml` | `ET.parse(file)` |
| **YAML** | CI/CD, configs | `PyYAML` | `yaml.safe_load(file)` |
| **CSV** | Données tests | `pandas`, `csv` | `pd.read_csv(file)` |
| **Protobuf / Avro** | gRPC, Kafka | `protobuf` | `.proto` schema |

---

## 🧭 Synthèse

| Domaine | Protocole | Format | Exemple d’usage |
|----------|------------|---------|-----------------|
| Web UI | HTTP/HTTPS | HTML | Selenium, Playwright |
| API REST | HTTP | JSON | Pytest + requests |
| GraphQL | HTTP POST | JSON (query) | Postman, Robot |
| WebSocket | WS/WSS | JSON | Playwright |
| gRPC | HTTP/2 | Protobuf | Backends |
| MQ / Kafka | TCP | JSON, binaire | Streaming |
| SQL | TCP / JDBC | SQL | Vérification BD |
| Fichier | FTP, SFTP | CSV, XML | Pipeline batch |

---

## 🧠 À retenir
- La majorité des tests automatisés impliquent **HTTP/HTTPS** et **JSON**.  
- Pour des systèmes modernes : REST, GraphQL et gRPC.  
- Pour des systèmes d’intégration : MQ, FTP, BDD.  
- Le choix du protocole dépend **du type d’application testée** (web, backend, IoT, batch, etc.).

---

📚 **Références utiles**
- [RFC 2616 – HTTP/1.1](https://datatracker.ietf.org/doc/html/rfc2616)
- [gRPC Official Docs](https://grpc.io/docs/)
- [Robot Framework Libraries](https://robotframework.org/#libraries)
- [Selenium WebDriver Protocol](https://www.w3.org/TR/webdriver2/)
