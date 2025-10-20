# ⚙️ Fiche Pyenv – Gestionnaire de versions de Python

## 🎯 Objectif
Permet d’installer, de gérer et de basculer entre plusieurs versions de Python sur la même machine.

---

## ⚙️ Installation (Linux / Mac)

```bash
curl https://pyenv.run | bash
# Ajouter à .bashrc :
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

---

## 🧱 Commandes principales

| Action | Commande | Description |
|---------|-----------|-------------|
| Lister les versions installées | `pyenv versions` | Affiche les versions locales/globales |
| Lister les versions disponibles | `pyenv install --list` | Voir toutes les versions possibles |
| Installer une version | `pyenv install 3.11.4` | Télécharge et compile Python |
| Définir la version locale | `pyenv local 3.11.4` | Crée `.python-version` dans le dossier |
| Définir la version globale | `pyenv global 3.11.4` | Définit la version par défaut |
| Vérifier la version utilisée | `pyenv version` | Affiche la version active |

---

## 💡 Astuces
- `pyenv which python` → montre le chemin de la version active  
- Fonctionne très bien **avant d’utiliser Poetry**, pour fixer la version du projet.  
- Compatible avec **Poetry**, **Pytest**, **Playwright**, etc.

---

## ⚠️ Problèmes courants
- Python introuvable → relancer le terminal après installation  
- Version non détectée → vérifier le `.python-version` présent dans le dossier

---

## ❓ Questions typiques Codingame

1. Que fait `pyenv local 3.11.4` ?  
   → Définit la version Python locale au projet.

2. Où est enregistrée cette version ?  
   → Dans le fichier `.python-version`.

3. Quelle commande installe une version spécifique de Python ?  
   → `pyenv install 3.10.12`

4. Quelle est la différence entre `pyenv global` et `pyenv local` ?  
   → `global` pour tout le système, `local` pour un dossier projet.

5. Comment vérifier la version Python utilisée ?  
   → `pyenv version`

---

📘 **Fichier : fiche_pyenv.md**
