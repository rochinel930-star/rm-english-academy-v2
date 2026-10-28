# Vérification V4 — 28 octobre 2026

## Contrôles locaux réussis

- `npm test` : 21 tests réussis, 0 échec. Structure des contenus, répartition par chapitre, diagnostic, absence de doublon dans une séance, priorité aux questions inédites, maîtrise prudente, migration et sérialisation FSRS, conservation des brouillons, 30 × 40 variantes et quatre sujets/PDF.
- `node tests/browser.mjs` : 14 parcours réussis ; 40 mini-tests, dix réponses de quiz, diagnostic, lecture, rédaction, mini-examen, dictée, export/import, hors connexion, expiration et suppression. 16 routes × six tailles = 96 contrôles de débordement ; 32 analyses axe. Zéro erreur JavaScript, débordement ou violation détectée.
- `node tests/v3-browser.mjs` : 30 chapitres, 150 activités soumises, quatre sujets complets (64 étapes), modes accompagné/examen, reprise, PDF, export/import, hors connexion et suppression. 38 routes × deux largeurs = 76 contrôles responsive et axe, sans échec. Le libellé de sortie conservait « 72 » d’une ancienne version ; le script parcourait bien les 30 chapitres et quatre sujets. Le libellé a été corrigé.
- `node tests/v4-browser.mjs` : sept parcours réussis ; séance quotidienne équilibrée, tableau des 30 chapitres, vingt réponses sur les cinq nouvelles lectures, six brouillons indépendants et modèles, séparation de la rédaction d’examen, liens ciblés et nouveaux modules hors connexion. 17 routes × deux largeurs = 34 contrôles responsive et axe. Zéro erreur JavaScript, débordement ou violation détectée.
- Vérification visuelle de la capture mobile de l’accueil : titres, navigation, quatre choix, bouton principal et WhatsApp lisibles. Palette crème/terracotta et accents camerounais conservés.

Au total, ces suites réalisent 206 contrôles route/écran et 142 analyses axe (certaines pages sont vérifiées dans plusieurs suites). Les 21 tests unitaires/intégration ont été relancés après les corrections et sont tous passés.

## Problèmes trouvés puis corrigés

- Ancienne banque active dominée par for/since : archivage des 1 152 combinaisons et nouvelle sélection par domaine.
- Deux QCM avaient la même phrase : contexte du second cas changé et contrôle d’unicité ajouté.
- Mini-examen : sélection explicitement limitée aux domaines Grammar et Vocabulary.
- Brouillon du mini-examen susceptible d’écraser celui de l’atelier : stockage séparé.
- Tests anciens supposant dix questions même lorsqu’un chapitre n’en contient que neuf : assertions alignées sur le nombre réellement disponible, sans compléter artificiellement avec des doublons.
- Test ciblé supposant huit questions inédites malgré une réponse antérieure : vérification calculée à partir de l’historique réel.

## Limites

Edge/Chromium sur Windows, largeurs émulées 360, 390, 412, 768, 1366 et 1440 pixels. Firefox, WebKit, appareils physiques, lecteur d’écran et audit humain complet WCAG non réalisés. Axe n’est pas une certification WCAG. Pas de mesure terrain LCP/INP/CLS ni d’étude de rétention auprès d’élèves. La voix synthétique réelle et les caractéristiques phonétiques ne sont pas certifiées par ces tests.

## Publication

La vérification anonyme des deux alias, les empreintes des ressources et les téléchargements PDF seront consignés après déploiement dans LIVRAISON-V4.md et verification-v4.json.
