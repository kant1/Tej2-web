# TEJ'2 — Site institutionnel

Site vitrine de **TEJ'2**, le mentor IA des mécaniciens et passionnés d'automobile
(_source de l'application : `../Tej2`_).

Site statique (HTML / CSS / JS, sans build) servi via **GitHub Pages** depuis le dossier `docs/`.

## Structure

```
docs/
├── index.html        # Page principale
├── 404.html          # Page d'erreur
├── styles.css        # Styles (charte navy + or, Rajdhani)
├── script.js         # Menu mobile, animations, lien vers l'app
├── .nojekyll         # Désactive le traitement Jekyll de GitHub Pages
└── assets/           # Logo et icônes
```

## Aperçu en local

Aucun build nécessaire. Ouvrez `docs/index.html` dans un navigateur, ou lancez un serveur :

```bash
cd docs && python3 -m http.server 8080
# puis http://localhost:8080
```

## Déploiement via GitHub Pages

1. Poussez ce dépôt sur GitHub (branche `main`).
2. Dans le dépôt : **Settings → Pages**.
3. **Source** : `Deploy from a branch`.
4. **Branch** : `main` — **dossier** : `/docs`.
5. **Save**. Le site est publié sous quelques minutes à l'adresse
   `https://<utilisateur>.github.io/<repo>/`.

### Domaine personnalisé (optionnel)

Ajoutez un fichier `docs/CNAME` contenant votre domaine (ex. `tej2.app`), puis
configurez l'enregistrement DNS chez votre registrar.

## À personnaliser

- **Lien de l'application** : variable `APP_URL` en haut de `docs/script.js`.
- **Contenu / offres** : sections dans `docs/index.html`.
- **Couleurs** : variables CSS `:root` dans `docs/styles.css` (`--gold`, `--bg`…).
- **Contact** : adresse e-mail dans le footer de `docs/index.html`.
