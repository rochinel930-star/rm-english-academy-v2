# Livraison RM English Academy V2

Livrée le 26 octobre 2026. Le rapport Deep Research a été reçu intégralement dans cette conversation et ses 30 points sont suivis dans AUDIT-30.md. Cette livraison apporte une V2 utilisable ; elle ne prétend pas achever les services avancés de toute la feuille de route.

## Accès public vérifié

- Site principal : https://rm-digital-ecom-english-academy.vercel.app/
- Autre alias : https://rm-digital-ecom-english-academy-devs-projects-fc924e78.vercel.app/
- Déploiement : `dpl_4b8H63NRLn9PS5gUhY82eoJ3uKe9`, état `READY`, production.
- URL de déploiement : https://rm-digital-ecom-english-academy-fz7netogh.vercel.app/
- Projet : `prj_vxfVz2cEWXfAsoE3QasxBeyNx3hd` ; équipe : `team_ax9q51jVyGhygNUnI75caCzk`.

Les deux alias retournent HTTP 200 sans cookie, sans redirection et sans lien de contournement. Un navigateur Edge/Chromium avec contexte neuf a ouvert les deux sites, une leçon et un quiz avec correction/bilan. Une capture mobile à 390 px n’a révélé aucun débordement. Le rechargement hors connexion a également réussi sur la production après mise en cache. Aucune erreur JavaScript détectée sur ce parcours.

Protection Vercel passée de `all_except_custom_domains` à `preview` : la production est publique, les préversions restent protégées. Aucun compte élève ni contenu personnel n’est hébergé par cette application.

## Ce qui est livré

- Quatre masterclasses originales en français, chacune en dix sections repliables : règles, conjugaison, auxiliaires, nuances, états/actions, erreurs motivées, marqueurs non absolus, français/anglais, for/since, since clauses, passif, comparaisons, production et stratégie d’examen.
- 40 mini-tests à réponse produite et validation de sections ; les chapitres ne sont pas marqués acquis par simple ouverture.
- 42 QCM éditoriaux et 1 152 variantes contrôlées, soit 1 194 items. La quantité de variantes ne représente pas autant de problèmes pédagogiques indépendants.
- Diagnostic équilibré, difficulté au choix, priorité aux fragilités, quiz chronométrés facultatifs, bilan, explication de chaque distracteur, cahier d’erreurs, maîtrise prudente et échéances de révision.
- Progression locale durable, objectif quotidien, streak, badges d’acquis, export/import et effacement.
- Lexique de 12 verbes avec IPA et formes, atelier de pièges, écoute avec vitesse/voix, transcription masquable, dictée et enregistrement local.
- Ateliers Grammar, Vocabulary, Reading et Composition ; un texte original ; brouillon sauvegardé ; grille de relecture ; mini-examen transversal de 30 minutes ou sans limite.
- Interface crème/terracotta avec touches camerounaises, responsive, clavier, réduction d’animation, PWA et ressources légères.

## Code et historique

Dépôt dédié public : https://github.com/rochinel930-star/rm-english-academy-v2

Commit du code effectivement déployé : `a92b47ea9ca88c2962dc5ce54a81296d9c673131`.

Le dépôt a été créé séparément. Le connecteur GitHub a renvoyé 403 lors de l’écriture de l’arbre ; le transfert a finalement réussi par Git avec l’authentification existante, sans extraction de jeton. Les commits de documentation ultérieurs ne changent pas les ressources publiées. RéviCam et les autres projets n’ont pas été modifiés.

Publication réalisée par l’API Vercel à partir des fichiers du commit, avec métadonnées du dépôt. La liaison Git/Vercel pour déploiement automatique à chaque push n’a pas été configurée ; un push futur ne doit donc pas être considéré comme une publication automatique.

## Vérifications

9/9 tests unitaires/intégration ; 14/14 parcours navigateur ; 96 visites de contrôle responsive ; 32 scans axe sans violation détectée. Le contrôle public est décrit ci-dessus. Voir TESTS.md pour les commandes, les échecs corrigés et la portée exacte.

Ce n’est pas une certification WCAG, une mesure Core Web Vitals terrain ou une validation sur Safari/Firefox et téléphones physiques. Les voix n’ont pas été écoutées par un évaluateur humain ; le refus du micro a été testé. Une relecture linguistique externe et une mesure d’apprentissage avec des élèves restent nécessaires.

## Restes explicites

La matrice classe 8 points « fait », 19 « partiel » et 3 « non fait ». Aucun domaine commercial n’a été acheté.

Pas de comptes synchronisés, de base serveur, de FSRS, de professeur IA, de notation phonétique, de conversation vocale adaptative, de vrai examen blanc complet et officiellement aligné, ni de tableau enseignant/Studio RM. Les ateliers disponibles ne sont pas présentés comme ces services absents. Les niveaux internes ne sont pas des niveaux CECRL certifiés. La rédaction reçoit une grille, pas une note automatique.

Pour ajouter ces services : backend et authentification dédiés, politique de données, droits par rôle, validation du référentiel Bac, corpus plus large et, pour l’IA, fournisseur/clé côté serveur, budget, quotas, modération et évaluations. ARCHITECTURE.md détaille cette extension sans introduire de clé ni de dépense dans la V2.

Le numéro de marque fourni, 95 60 47 47, est repris dans le pied de page. Son acheminement téléphonique/WhatsApp n’a pas été vérifié ; aucun chiffre supplémentaire n’a été inventé.

## Retour arrière

Ancienne production : `dpl_CitAZuCphmWpxvVy6RK2o9vXNmTf`. Elle n’a pas été supprimée. Une restauration Vercel doit viser uniquement le projet RM English Academy. Le profil V2 utilise une clé de stockage distincte de la V1 ; aucun score V1 n’est présenté comme un historique V2 reconstitué.
