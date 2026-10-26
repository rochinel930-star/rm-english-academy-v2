# Vérifications exécutées — 26 octobre 2026

## Résultats

| Contrôle | Résultat réel |
|---|---|
| Tests unitaires/intégration Node | 9/9 réussis |
| Parcours Playwright dans Microsoft Edge (moteur Chromium) | 14/14 réussis |
| Contrôles responsive | 16 routes × 6 tailles = 96 visites ; aucun débordement horizontal après correction |
| axe-core, WCAG 2 A/AA, 2.1 AA, 2.2 AA | 16 routes à 360 et 1 440 px = 32 scans ; aucune violation détectée |
| Erreurs JavaScript pendant ces parcours | Aucune |
| Hors connexion | Rechargement puis ouverture d’une masterclass réussis après cache initial |
| Dépendances de développement | Installation : audit npm, 0 vulnérabilité connue signalée |

## Les 14 parcours

1. Clavier : lien d’évitement et accès au contenu.
2. Accueil et navigation.
3. Réponse aux 40 mini-tests et persistance des sections.
4. Quiz : corrections de chaque choix, réponses désactivées après validation, bilan 9/10, reprise.
5. Diagnostic de 12 questions et bilan d’un arrêt anticipé avec questions non traitées.
6. Compréhension écrite et bilan 4/4.
7. Rédaction persistante, grille et texte HTML affiché sans exécution.
8. Mini-examen transversal 12/12, formulaire verrouillé après remise, aucune note fictive de rédaction.
9. Dictée exacte, changement de phrase, gestion d’un micro refusé/indisponible.
10. Changement de verbe, affichage du participe et des formes lexicales.
11. Téléchargement de l’export et import d’une sauvegarde.
12. Rechargement hors connexion et navigation jusqu’à une leçon.
13. Expiration du chronomètre simulée par l’horloge du navigateur, bilan correct.
14. Effacement explicite de la progression locale.

## Écrans

360×800, 390×844, 412×915, 768×1024, 1366×768, 1440×900. Les 16 routes couvrent accueil, parcours, quatre leçons, pratique, progression, vocabulaire, pièges, oral, Bac, lecture, écriture, examen et confidentialité.

## Échecs trouvés puis corrigés

- Des explications de distracteurs étaient trop courtes pour le garde-fou éditorial automatique : elles ont été développées. Suite finale : 9/9.
- Quatre contrôles de débordement échouaient à 360/390 px sur accueil/parcours : les badges longs des cartes ne se repliaient pas. Correction du retour à la ligne ; nouvelle suite complète : aucun débordement.
- Focus visuel initial appliqué à tout le contenu : rendu corrigé, puis lien clavier vérifié.

## Performance : portée des mesures

Ressources publiques : environ 120,4 ko non compressés et 44,1 ko en gzip calculé localement (somme par fichier). Aucune police distante, image photographique, bibliothèque de rendu, analytics ou appel IA en production. Le générateur produit les variantes en mémoire, sans télécharger un catalogue lourd.

Ce budget n’est pas une mesure de LCP/INP/CLS sur réseau mobile camerounais. Aucun score Lighthouse, test de charge, objectif Core Web Vitals terrain ou résultat de rétention pédagogique n’est inventé.

## Limites de validation

- Firefox/WebKit, Safari sur iPhone et appareils Android physiques non testés.
- Aucun lecteur d’écran humain ni audit WCAG manuel complet. Axe sans violation ne prouve pas une conformité totale.
- L’écoute physique et la qualité des voix TTS n’ont pas été évaluées. Le chemin de refus du micro est testé ; une vraie capture/relecture dépend encore du matériel et des permissions de l’utilisateur.
- Inscription, connexion et tableau enseignant absents : leurs parcours ne peuvent pas être testés.
- Le mini-examen est original et restreint ; ni annale officielle ni examen complet de trois heures.
- Validation linguistique structurelle et relecture de conception effectuées ; validation externe par enseignant et étude d’apprentissage restent nécessaires.
- Résultats ci-dessus obtenus sur le serveur local. Le contrôle public après déploiement est décrit dans LIVRAISON.md.

## Reproduire

1. Installer Node 22/24 et exécuter `npm ci`.
2. `npm test`.
3. Dans un terminal, `npm start`.
4. Dans un autre, `npm run test:e2e` (Edge installé). Adapter `BROWSER_CHANNEL` si un autre navigateur compatible est installé. `TEST_URL` permet de viser un déploiement public dédié au test.

Les rapports bruts et captures sont produits dans `test-results/`, ignoré par Git. Les tests navigateur utilisent un profil de test isolé, sans données réelles d’élèves.
