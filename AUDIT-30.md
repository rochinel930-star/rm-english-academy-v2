# Matrice de suivi de l’audit Deep Research

Rapport complet fourni directement par l’utilisateur le 26 octobre 2026, après une première récupération de conversation ne contenant que des références internes. Il a été lu intégralement. Les 30 intitulés ci-dessous reprennent les ajouts du rapport ; leurs citations internes ChatGPT ne sont pas des sources consultables indépendamment. Les statuts décrivent cette livraison et ne signifient pas que toutes les ambitions de la feuille de route sont achevées.

| Rang | Ajout exact de l’audit | État | Réalisation / raison du reste |
|---|---|---|---|
| 1 | Déblocage public + véritable domaine | Partiel | V2 publiée sur le projet existant ; production publique et protection limitée aux préversions. Les deux alias répondent 200 sans connexion ; aucun domaine commercial acheté. Vérification finale dans LIVRAISON.md. |
| 2 | Nouveau dépôt GitHub indépendant et architecture modulaire | Fait | Nouveau dépôt dédié : https://github.com/rochinel930-star/rm-english-academy-v2. Modules de contenu, banque, moteur, interface, PWA et tests. Création via le navigateur ; transfert du code par Git, le connecteur ayant refusé l’écriture avec une erreur 403. Aucun autre dépôt modifié. |
| 3 | Suite complète de tests automatiques | Partiel | Tests unitaires/intégration et parcours automatisés Edge/Chromium, responsive, axe et hors connexion. Firefox, WebKit, appareils physiques et qualification WCAG humaine à compléter. Résultats exacts dans TESTS.md. |
| 4 | Comptes élèves avec progression persistante | Partiel | Profil anonyme durable par navigateur, export/import JSON, historique, brouillon et effacement. Pas de compte, serveur de données ni synchronisation multi-appareils. |
| 5 | Test de niveau initial intelligent | Partiel | Diagnostic équilibré de 12 questions, 3 par temps, bilan par compétence. Limité au présent ; pas de niveau CECRL ni placement calibré. |
| 6 | Carte de maîtrise des compétences | Fait | Cinq états : Non étudiée, En apprentissage, Fragile, Maîtrisée, À réviser. Seuils documentés et diversité minimale de questions. Modèle prudent, non psychométrique. |
| 7 | Moteur adaptatif | Partiel | Priorité aux faibles scores récents, diversité conservée. Pas d’IRT, de graphe de prérequis ou de calibration empirique. |
| 8 | Banque structurée de milliers de questions | Partiel | 42 questions éditoriales + 1 152 variantes contrôlées = 1 194 items. Plus d’un millier, pas plusieurs milliers de problèmes indépendants ; relecture par enseignant externe encore requise. |
| 9 | Générateur contrôlé d’exercices | Fait | Combinaisons finies de sujets, activités et compléments for/since, avec métadonnées, identifiants uniques et corrections. Pas de génération libre non validée. |
| 10 | Cahier automatique des erreurs | Fait | Réponse choisie, attendu, raison du distracteur, règle et lien au cours. Les cours contiennent des exemples supplémentaires. Historique local limité à 5 000 réponses. |
| 11 | Répétition espacée avec FSRS | Partiel | Révisions à échéance avec intervalles 1/3/7/14/30/60 jours. FSRS non intégré : aucune prétention FSRS ou optimisation de mémoire. |
| 12 | Mode rappel actif | Fait | 40 mini-tests à réponse produite, dictée, explications à formuler avant révélation et tâches de production dans les cours. |
| 13 | Corrections réellement pédagogiques | Fait | Chaque QCM explique la bonne réponse et chaque distracteur. Bilan de séance et erreurs consultables. |
| 14 | Professeur IA socratique | Non fait | Pas de service IA configuré. Activités guidées éditoriales disponibles ; aucun faux chatbot présenté comme une IA. Architecture sûre proposée dans ARCHITECTURE.md. |
| 15 | IA ancrée dans les cours validés | Non fait | Base éditoriale structurée disponible pour un futur ancrage. Absence de backend, clé, budget, modération et évaluations IA. |
| 16 | Mode “Piège grammatical” | Fait | Atelier de contrastes, rappel avant révélation, et cas difficiles détaillés dans les 40 sections. |
| 17 | Laboratoire du vocabulaire | Partiel | 12 verbes avec IPA, sens, formes, collocation, passif et écoute. Lexique plus vaste, familles de mots et recherche à étendre. |
| 18 | Simulateur Grammar du Bac | Partiel | Entraînement grammatical et section Grammar du mini-examen. Pas de conformité officielle revendiquée ; annales et référentiel courant à valider avec enseignant. |
| 19 | Simulateur Vocabulary du Bac | Partiel | Atelier lexical et section Vocabulary. Corpus encore restreint ; word formation et phrasal verbs à développer. |
| 20 | Simulateur Reading Comprehension du Bac | Partiel | Texte original, 4 questions factuelles/inférentielles, preuves et correction. Banque de textes et niveaux à enrichir. |
| 21 | Coach de Composition | Partiel | Consigne, brouillon durable, comptage, grille de relecture et exemple structuré. Pas d’analyse sémantique automatique ni notation fictive. |
| 22 | Examen blanc complet chronométré | Partiel | Mini-examen transversal 30 min ou sans limite, remise, bilan objectif /12 et rédaction non notée. Ce n’est pas un sujet complet de 3 h aligné officiellement. |
| 23 | Laboratoire de prononciation | Partiel | Écoute, répétition, enregistrement local et réécoute. Pas d’analyse phonémique, d’accentuation ni d’intonation. |
| 24 | Listening interactif | Partiel | 5 modèles vocaux, vitesses, voix GB/US selon appareil, transcript masquable et dictée. Pas de corpus enregistré professionnellement ni compréhension audio étendue. |
| 25 | Conversations et jeux de rôles vocaux | Partiel | Un jeu de rôle de bibliothèque, répliques guidées et enregistrement personnel. Pas d’interlocuteur vocal adaptatif. |
| 26 | Plan quotidien + streak + objectifs | Fait | Plan 15 minutes, objectif 5/10/15 questions, compteur quotidien, jours consécutifs et échéances. Pas de notifications ou pression artificielle. |
| 27 | Gamification intelligente | Partiel | Badges de maîtrise fondés sur les réponses distinctes, parcours visible et streak. Pas d’XP, classements, défis sociaux ou récompenses commerciales. |
| 28 | PWA hors connexion et mode faible consommation | Partiel | Manifest, service worker, cache des cours et exercices. Sans police, vidéo, analytics ou bibliothèque externe en production. Pas de synchronisation différée ; l’audio système peut exiger le réseau. |
| 29 | Accessibilité complète et sécurité adolescents | Partiel | Sémantique, clavier, labels, focus, réduction d’animation, données minimales, effacement, aucun chat libre ni collecte d’identité. Tests automatiques et limites dans TESTS.md ; conformité WCAG complète non certifiée. |
| 30 | Dashboard professeur + Studio RM | Non fait | Architecture de contenus modulaire et extensible, mais pas d’interface enseignant, de classes, de devoirs ou de studio d’édition sécurisé. Backend/authentification/rôles requis. |

## Écart pédagogique principal traité

Les quatre fiches courtes V1 sont remplacées par quatre masterclasses de dix sections chacune : formes, sens, exceptions, traductions, français/anglais, comparaisons, passif, since clauses, états, marqueurs non absolus, erreurs, production, récapitulatif et stratégie d’examen. Ces cours sont des contenus originaux à faire relire par un enseignant avant de les qualifier de référentiel validé internationalement.

## Vérification de l’apprentissage réel

Les événements de réponse sont horodatés et les cartes reviennent à échéance. Aucun effet sur l’apprentissage n’a encore été démontré par une étude d’élèves. Un protocole pré-test, post-test, J3/J7/J30 reste à mener avec consentement approprié, sans publier de données d’élèves.
