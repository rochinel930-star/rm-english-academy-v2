# Vérification de la version 3.1 — 27 octobre 2026

## Tests locaux réussis

- `npm test` : 15 tests, 15 réussites. Intégrité de la banque, absence de répétition avant épuisement, corrections, stockage, adaptation prudente, couverture des variantes et structure des sujets.
- `node tests/browser.mjs` : 14 parcours réussis ; 96 configurations route/écran ; 32 analyses axe. Aucun débordement, aucune erreur JavaScript, aucune violation détectée. Dimensions : 360, 390, 412, 768, 1366 et 1440 pixels de largeur.
- `node tests/v3-browser.mjs` : réponses et corrections des 140 activités des 28 chapitres ; quatre sujets terminés ; brouillons, chronomètre après rechargement, scores séparés, PDF, export/import, hors connexion et effacement. 72 configurations route/écran avec axe, aucune violation détectée.
- `node tests/enrichment-release.mjs` : 48 configurations à 360, 390, 768 et 1440 pixels ; aucun débordement ni violation axe ; les 24 nouveaux QCM répondus correctement ; recherche, menu actif et captures d’écran.
- `node tests/navigation.mjs` : ouverture au clavier, recherche avec résultats, recherche sans résultat, réinitialisation du filtre, absence de débordement et analyse axe à 360 pixels.
- Nouveau sujet et corrigé PDF : quatre pages chacun ; lecture du texte extrait et inspection visuelle des huit pages rendues. Sujet de lecture : 337 mots ; modèle de composition : 231 mots.
- `git diff --check` : aucune erreur d’espacement signalée.

Les contrôles utilisent Playwright et Microsoft Edge/Chromium. Les règles axe WCAG 2 A/AA, 2.1 AA et 2.2 AA sont activées. Cela ne constitue pas une certification WCAG : lecteurs d’écran réels, Safari, Firefox, appareils physiques et connexion mobile lente restent à vérifier. Aucun résultat de Core Web Vitals sur visiteurs réels n’est revendiqué.

## Corrections issues des contrôles

Les liens du pied de page étaient trop proches sur mobile : zones de clic agrandies. Le champ de recherche occupe désormais la largeur disponible. Une explication de distracteur trop courte a été développée. Les scénarios de test ont été adaptés à la nouvelle navigation et utilisent une comparaison exacte des réponses affichées pour éviter de confondre « it » et « about it ».

## Publication

`node tests/public-release.mjs` a réussi après le déploiement : deux alias anonymes HTTP 200, huit PDF vérifiés par empreinte SHA-256 sur chaque alias, quatre fichiers de la nouvelle version identiques aux fichiers locaux sur chaque alias. Recherche du chapitre Modaux, cinq variantes de relatives, réponse correcte au quatrième sujet, reprise après rechargement et lien WhatsApp vérifiés dans un navigateur anonyme. Aucune erreur JavaScript détectée. La preuve de publication est consignée dans LIVRAISON-V3.1.md et dans le fichier externe `verification-v31.json`.
