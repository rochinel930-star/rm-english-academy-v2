# Matrice de suivi de l’audit Deep Research

Rapport complet fourni directement par l’utilisateur le 26 octobre 2026, après une première récupération de conversation ne contenant que des références internes. Il a été lu intégralement. Les 30 intitulés ci-dessous reprennent les ajouts du rapport ; leurs citations internes ChatGPT ne sont pas des sources consultables indépendamment. Matrice mise à jour pour la V4 du 28 octobre 2026. Les statuts décrivent cette livraison et ne signifient pas que toutes les ambitions de la feuille de route sont achevées.

| Rang | Ajout exact de l’audit | État | Réalisation / raison du reste |
|---|---|---|---|
| 1 | Déblocage public + véritable domaine | Partiel | V2 publiée sur le projet existant ; production publique et protection limitée aux préversions. Les deux alias répondent 200 sans connexion ; aucun domaine commercial acheté. Vérification finale dans LIVRAISON.md. |
| 2 | Nouveau dépôt GitHub indépendant et architecture modulaire | Fait | Nouveau dépôt dédié : https://github.com/rochinel930-star/rm-english-academy-v2. Modules de contenu, banque, moteur, interface, PWA et tests. Création via le navigateur ; transfert du code par Git, le connecteur ayant refusé l’écriture avec une erreur 403. Aucun autre dépôt modifié. |
| 3 | Suite complète de tests automatiques | Partiel | 21 tests unitaires/intégration et suites de parcours Edge/Chromium, responsive, axe et hors connexion. Bilan V4 dans TESTS-V4.md. Firefox, WebKit, appareils physiques et qualification WCAG humaine restent à compléter. |
| 4 | Comptes élèves avec progression persistante | Partiel | Profil anonyme durable par navigateur, export/import JSON, historique, brouillon et effacement. Pas de compte, serveur de données ni synchronisation multi-appareils. |
| 5 | Test de niveau initial intelligent | Partiel | Diagnostic de 12 questions : trois par domaine écrit (grammaire, vocabulaire, méthode de lecture, méthode de rédaction). Aucun niveau CECRL ni placement psychométrique. Les QCM de méthode ne remplacent pas une production réelle. |
| 6 | Carte de maîtrise des compétences | Fait | Carte étendue aux 31 familles de la banque. Cinq états, seuils documentés, huit réponses distinctes minimum pour la maîtrise et retour à réviser après sept jours. Indicateur local prudent. |
| 7 | Moteur adaptatif | Partiel | Séances mixtes équilibrées entre cinq domaines ; priorité aux notions moins réussies parmi les questions inédites disponibles. Pas de calibration empirique ni graphe de prérequis. |
| 8 | Banque structurée de milliers de questions | Partiel | 260 QCM actifs éditoriaux, de 8 à 11 par chapitre, plus le laboratoire lexical. Les 1 152 anciennes variantes for/since sont exclues des séances et conservées uniquement pour relire les anciens résultats. Aucun volume artificiel présenté comme des milliers de problèmes distincts. |
| 9 | Générateur contrôlé d’exercices | Partiel | 1 200 combinaisons de production guidée : 30 chapitres × 5 objectifs × 8 contextes, avec grille. Ce sont des tâches ouvertes auto-évaluées, pas 1 200 QCM indépendants ni des corrections générées automatiquement. |
| 10 | Cahier automatique des erreurs | Fait | Réponse choisie, attendu, raison du distracteur, règle et lien au cours. Les cours contiennent des exemples supplémentaires. Historique local limité à 5 000 réponses. |
| 11 | Répétition espacée avec FSRS | Fait | ts-fsrs 5.2.3 intégré sous licence MIT, conservée avec le module. Réussite QCM = Good, erreur = Again ; échéances et état mémoire persistés. Migration des anciennes cartes lors de la prochaine réponse. Algorithme testé ; efficacité sur ces élèves non mesurée. |
| 12 | Mode rappel actif | Fait | 40 mini-tests à réponse produite, dictée, explications à formuler avant révélation et tâches de production dans les cours. |
| 13 | Corrections réellement pédagogiques | Fait | Chaque QCM explique la bonne réponse et chaque distracteur. Bilan de séance et erreurs consultables. |
| 14 | Professeur IA socratique | Non fait | Pas de service IA configuré. Activités guidées éditoriales disponibles ; aucun faux chatbot présenté comme une IA. Architecture sûre proposée dans ARCHITECTURE.md. |
| 15 | IA ancrée dans les cours validés | Non fait | Base éditoriale structurée disponible pour un futur ancrage. Absence de backend, clé, budget, modération et évaluations IA. |
| 16 | Mode “Piège grammatical” | Fait | Atelier de contrastes, rappel avant révélation, et cas difficiles détaillés dans les 40 sections. |
| 17 | Laboratoire du vocabulaire | Partiel | Laboratoire de 12 verbes, chapitres de choix lexical, formation des mots, expressions verbales et cinq axes de communication. Le lexique reste fini et sans recherche dictionnairique exhaustive. |
| 18 | Simulateur Grammar du Bac | Partiel | 30 chapitres, 150 activités initiales, QCM ciblés, quatre sujets blancs et mini-examen. Sujets originaux, sans conformité officielle certifiée ni analyse de fréquence des annales. |
| 19 | Simulateur Vocabulary du Bac | Partiel | Lexique des cinq axes, word formation, collocations, phrasal verbs et sections Vocabulary dans quatre sujets. Corpus enrichi mais fini, à faire relire extérieurement. |
| 20 | Simulateur Reading Comprehension du Bac | Partiel | Huit textes autonomes avec 32 questions et corrections, plus quatre textes longs dans les sujets blancs. Questions de faits, inférences, références et portée des affirmations. Pas de calibration de niveau. |
| 21 | Coach de Composition | Partiel | Six genres de rédaction, consignes, plans, modèles de 150–200 mots, brouillons séparés et six critères de relecture. Rédactions des sujets blancs également disponibles. Pas de notation sémantique automatique. |
| 22 | Examen blanc complet chronométré | Partiel | Quatre sujets blancs complets originaux, modes accompagné et examen chronométré, reprise, huit PDF sujet/corrigé. Score fermé sur 20 distinct de la partie libre auto-estimée sur 20. Alignement officiel certifié non établi. |
| 23 | Laboratoire de prononciation | Partiel | Écoute, répétition, enregistrement local et réécoute. Pas d’analyse phonémique, d’accentuation ni d’intonation. |
| 24 | Listening interactif | Partiel | Dix modèles vocaux, vitesses, GB/US selon appareil, transcript et dictée ; QCM de stratégie d’écoute. Pas de corpus enregistré professionnellement ni évaluation phonétique. |
| 25 | Conversations et jeux de rôles vocaux | Partiel | Un jeu de rôle de bibliothèque, répliques guidées et enregistrement personnel. Pas d’interlocuteur vocal adaptatif. |
| 26 | Plan quotidien + streak + objectifs | Fait | Entrée séance du jour, dix questions équilibrées, suggestion de cours fondée sur les réponses, rotation de lecture/rédaction, objectif personnel et streak. Sans notifications ni pression à maintenir une série. |
| 27 | Gamification intelligente | Partiel | Badges de maîtrise fondés sur les réponses distinctes, parcours visible et streak. Pas d’XP, classements, défis sociaux ou récompenses commerciales. |
| 28 | PWA hors connexion et mode faible consommation | Partiel | PWA avec cours, exercices et nouveau module FSRS en cache. Aucune police ou bibliothèque chargée depuis un CDN. Les PDF sont disponibles hors ligne après consultation ; audio selon l’appareil. Pas de synchronisation différée. |
| 29 | Accessibilité complète et sécurité adolescents | Partiel | Sémantique, clavier, labels, focus, réduction d’animation, données minimales, effacement, aucun chat libre ni collecte d’identité. Tests automatiques et limites dans TESTS.md ; conformité WCAG complète non certifiée. |
| 30 | Dashboard professeur + Studio RM | Non fait | Architecture de contenus modulaire et extensible, mais pas d’interface enseignant, de classes, de devoirs ou de studio d’édition sécurisé. Backend/authentification/rôles requis. |

## Écart pédagogique principal traité

Les quatre fiches courtes V1 sont remplacées par quatre masterclasses de dix sections chacune : formes, sens, exceptions, traductions, français/anglais, comparaisons, passif, since clauses, états, marqueurs non absolus, erreurs, production, récapitulatif et stratégie d’examen. Ces cours sont des contenus originaux à faire relire par un enseignant avant de les qualifier de référentiel validé internationalement.

## Vérification de l’apprentissage réel

Les événements de réponse sont horodatés et les cartes reviennent à échéance. Aucun effet sur l’apprentissage n’a encore été démontré par une étude d’élèves. Un protocole pré-test, post-test, J3/J7/J30 reste à mener avec consentement approprié, sans publier de données d’élèves.

## Enrichissement 2.1
Huit ateliers de cas difficiles, 72 QCM supplémentaires et deux lectures corrigées. Résultats et limites de recherche détaillés dans ENRICHISSEMENT-V2.1.md. Aucun statut complet supplémentaire attribué aux fonctions encore partielles.

## Livraison V3
25 chapitres, 125 activités de départ, 1 000 combinaisons de production guidée et trois sujets blancs avec six PDF. Modes accompagné/examen, reprise et auto-évaluation explicite. Voir LIVRAISON-V3.md. Les lignes 18 à 22 restent partielles au sens d’un alignement officiel certifié : les sujets sont originaux RM et les réponses libres sont auto-évaluées. Comptes, IA réelle et dashboard enseignant restent non livrés.

## Enrichissement 3.1
28 chapitres, 140 activités initiales, 1 120 combinaisons de production guidée, 1 290 QCM (dont 138 éditoriaux), quatre sujets blancs et huit PDF. Navigation simplifiée et nouvelles notions détaillées dans ENRICHISSEMENT-V3.1.md. Les statuts des trente points restent prudents : cet enrichissement ne fournit ni comptes synchronisés, ni IA réelle, ni validation officielle du programme ou des épreuves.

## V4 : correction du déséquilibre
Les chiffres des sections V2/V3 ci-dessus sont historiques. La banque active V4 compte 260 QCM équilibrés, sans les anciennes variantes combinatoires for/since. Les 1 200 variantes ouvertes couvrent les 30 chapitres. Détails, sources et limites dans LIVRAISON-V4.md.
