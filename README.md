# RM English Academy V4

Application éducative en français, indépendante de RéviCam et de tout autre projet.

Site : https://rm-digital-ecom-english-academy.vercel.app/ · Dépôt : https://github.com/rochinel930-star/rm-english-academy-v2

## Démarrer

Node.js 22 ou 24 : `npm start`, puis ouvrir http://127.0.0.1:4173.

`npm test` exécute les tests du moteur et de la banque sans installation de dépendances.

Les tests navigateur utilisent Playwright et axe-core en dépendances de développement. Voir TESTS.md pour les commandes et résultats réels.

## Déploiement

Projet Vercel autorisé uniquement : `prj_vxfVz2cEWXfAsoE3QasxBeyNx3hd`. Sortie `public`, sans compilation. Ne pas importer les fichiers de rapport comme ressources publiques. Aucun secret requis. Toute future publication sur un dépôt distant doit utiliser un nouveau dépôt propre au projet ; aucun autre dépôt ne doit recevoir ces fichiers.

Lire AUDIT-30.md pour le périmètre et les limites de chaque demande, ARCHITECTURE.md pour les évolutions, LIVRAISON.md et TESTS.md pour la livraison vérifiée.

## Version 3
Parcours : /#programme. Épreuves : /#papers. Rapport : LIVRAISON-V3.md. Tests : npm test ; node tests/v3-browser.mjs ; node tests/variants-browser.mjs (serveur local actif).
Les PDF proviennent de public/papers.js. Exporter ce tableau vers test-results/papers.json, puis exécuter scripts/build-papers.py avec Python, reportlab et pypdf. Le script utilise Arial sous Windows ; adapter les chemins des polices pour un autre environnement. Aucun service externe ne génère ni ne note les réponses.

## Enrichissement 3.1
Voir [le rapport pédagogique et les changements](ENRICHISSEMENT-V3.1.md) et [les contrôles de livraison](TESTS-V3.1.md). Nouveaux modules : articles/quantités, modaux/déductions, relatives ; quatrième sujet blanc sur l’orientation. La navigation publique est organisée en quatre actions.

## Version 4 — 28 octobre 2026
30 chapitres, 150 activités initiales, 260 QCM éditoriaux actifs, 1 200 combinaisons de production guidée (auto-évaluées), huit lectures autonomes, six ateliers de rédaction et quatre sujets blancs avec huit PDF.

Nouvelles entrées : `/#today`, `/#coverage`, `/#reading-hub`, `/#writing-hub`. Révision FSRS via ts-fsrs 5.2.3, module MIT fourni localement. Attribution : THIRD-PARTY-NOTICES.md.

Validation : `npm test`, `node tests/browser.mjs`, `node tests/v3-browser.mjs`, `node tests/v4-browser.mjs`. Serveur local nécessaire aux parcours. Rapport : LIVRAISON-V4.md ; matrice : AUDIT-30.md.
