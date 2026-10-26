# Architecture et évolution

Application statique modulaire, sans dépendance JavaScript en production. Le site V1 était un seul `src/index.html` déployé par API, sans Git source dans les métadonnées retournées. Le projet Vercel existant reste le seul destinataire autorisé : `prj_vxfVz2cEWXfAsoE3QasxBeyNx3hd`, équipe `team_ax9q51jVyGhygNUnI75caCzk`.

## Modules

- `public/content.js` : leçons, mini-tests, lexique et texte original.
- `public/bank.js` : QCM éditoriaux, distracteurs motivés et variantes contrôlées.
- `public/engine.js` : données versionnées, sélection, adaptation, maîtrise, révisions.
- `public/app.js` : routes, événements, rendu, ateliers, oral et mini-examen.
- `public/sw.js` : cache uniquement des ressources publiques de cours.
- `vercel.json` : sortie statique et en-têtes de sécurité.
- `tests/` : validation du moteur, des contenus et des parcours.

## Données

Le profil est local à l’origine du site : changer d’alias Vercel change l’espace de stockage. Exporter/importer permet un transfert manuel. Une sauvegarde mal formée est filtrée ; les textes utilisateur sont échappés avant rendu. Aucun secret, SDK IA, base de données, serveur de notation, pixel publicitaire ou compte externe n’est utilisé.

Les dates du streak suivent le fuseau de l’appareil. Les intervalles utilisent des durées de 24 h. Les réussites aux mini-tests valident des sections mais n’augmentent pas artificiellement les statistiques du QCM. L’import remplace le profil local, il ne fusionne pas deux profils.

## Comptes et enseignants : prochaine extension

Créer un backend dédié au projet, avec authentification, récupération de compte, contrôle d’accès par élève/classe/enseignant et tests de séparation des données. Les tables pourraient être : users, memberships, attempts, mastery, review_cards, assignments et content_versions. Ne jamais confier l’autorisation au seul navigateur. Prévoir une politique de conservation, export/effacement et revue des exigences applicables aux mineurs avant ouverture des inscriptions.

## IA réelle : contrat prévu, service absent

Un futur endpoint serveur `POST /api/tutor` recevrait `lessonId`, `sectionId`, une question limitée et un identifiant pseudonyme. Il sélectionnerait des extraits éditoriaux versionnés ; le modèle devrait citer leurs identifiants, guider par indices et pouvoir dire qu’il ne sait pas. Les réponses ne modifieraient pas automatiquement le référentiel.

Prévoir authentification, quotas, plafond budgétaire, limitation de débit, modération en entrée/sortie, minimisation des journaux, interdiction des données personnelles, mécanisme de signalement et tests de sécurité pour adolescents. Conserver la clé uniquement côté serveur. Une clé, un fournisseur, un budget et une politique de données doivent être choisis avant activation. Aucun appel IA n’est effectué par cette V2.

## Qualité éditoriale

Un nouvel item doit avoir un identifiant unique, une compétence, une difficulté, une réponse unique dans le contexte et une explication de chaque choix. Les variantes ne sont pas des milliers de compétences indépendantes. La validation structurelle automatique ne prouve pas la justesse grammaticale : relecture par enseignant recommandée. Pour un véritable examen blanc camerounais, utiliser le référentiel et les annales avec leurs droits et date de validité vérifiés.
