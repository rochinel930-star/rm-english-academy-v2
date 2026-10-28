import {practiceEnglish,englishContexts} from './language-practice.js';
import {v4Objectives} from './v4-chapters.js';
import {enrichmentObjectives} from './enrichment.js';
// Five distinct production objectives × eight communicative contexts per chapter.
// These are guided open tasks, not automatically graded QCM or AI-generated answers.
const contexts=[
['Un projet de classe','Tu organises un travail collectif avec un délai, deux responsables et une difficulté imprévue.'],
['Une initiative de quartier','Un groupe souhaite rendre un service accessible aux personnes qui disposent de peu de moyens.'],
['Un échange avec un responsable','Tu dois poser une question précise, expliquer ton besoin et vérifier la réponse sans être impoli.'],
['Un message à vérifier','Une information circule, mais sa date ou sa source manque. Tu dois décider ce que tu peux affirmer.'],
['Un choix à justifier','Deux solutions ont des avantages différents. Ton budget et ton temps sont limités.'],
['Un événement à raconter','Une activité préparée à l’avance a été interrompue, puis une solution a été trouvée.'],
['Une proposition pour le lycée','Tu présentes une amélioration, une condition de réussite et une manière d’observer le résultat.'],
['Un dialogue avec un camarade','Ton interlocuteur a mal compris un détail. Tu reformules et vérifies que vous parlez de la même chose.']
];
const objectives={
'simple':[
['Décris deux habitudes et une responsabilité avec trois sujets différents.','Vérifie le -s avec he/she/it et la base avec les sujets pluriels.','She organises the files. We check them every week.'],
['Écris deux questions : une question oui/non et une question sur le sujet.','Do/does + sujet + base pour la première ; who sujet sans do inutile pour la seconde.','Does she help? Who helps the team?'],
['Transforme deux affirmations en négations et explique où va le -s.','Does not porte la marque du singulier ; le verbe revient à la base.','He checks the list → He does not check the list.'],
['Distingue une habitude d’une action temporaire dans deux phrases.','Le simple présente la régularité ; le continuous présente ici une activité temporaire.','I usually work alone, but this week I am working with a partner.'],
['Annonce une étape future après when ou as soon as.','Présent dans la subordonnée temporelle, forme future dans la principale.','As soon as she arrives, we will begin.']],
'continuous':[
['Décris trois actions en cours avec I, she et they.','Accorde am/is/are puis utilise -ing ; ne laisse pas l’auxiliaire de côté.','They are preparing a display.'],
['Écris une question puis sa négation sur une activité momentanée.','Inverse be et le sujet dans la question ; place not après be.','Is she writing? She is not writing yet.'],
['Oppose une situation temporaire à une habitude.','Ajoute un repère limité et un repère habituel pour rendre le contraste clair.','He usually walks, but today he is taking the bus.'],
['Décris un arrangement futur confirmé, puis explique pourquoi le présent continu convient.','Un rendez-vous ou une organisation concrète justifie cette lecture future.','We are meeting the coordinator tomorrow at ten.'],
['Décris une action subie en cours avec un passif.','Sujet receveur + am/is/are + being + participe.','The room is being cleaned.']],
'perfect':[
['Présente trois résultats actuels d’actions passées sans date passée close.','Have/has + participe ; explique le lien actuel et évite yesterday dans ces phrases.','We have completed the first stage.'],
['Pose une question d’expérience et réponds avec never.','Ever dans la question, never sans seconde négation dans la réponse.','Have you ever organised an event? I have never done that.'],
['Distingue une durée toujours actuelle d’une période terminée.','Present perfect avec la situation qui continue ; prétérit avec la période close.','She has lived here for two years. She lived there in 2020.'],
['Emploie already, yet et just dans trois phrases différentes.','Le placement et le sens doivent correspondre : résultat déjà acquis, attente, événement récent.','I have just sent it. Have you checked it yet?'],
['Compare been et gone dans une petite scène.','Been suggère une visite avec retour ; gone une absence actuelle dans ce contexte.','He has gone to the office; he is not here.']],
'perfect-continuous':[
['Décris une activité commencée plus tôt et toujours en cours.','Have/has + been + -ing ; ajoute une durée avec for.','We have been preparing for two hours.'],
['Donne le point de départ avec since suivi d’une proposition.','Since introduit le départ ; une proposition passée peut suivre.','She has been helping since the project began.'],
['Explique une trace visible d’une activité récente.','L’activité peut avoir cessé tout récemment ; la trace explique le lien présent.','His hands are dirty because he has been repairing the bicycle.'],
['Oppose résultat compté et activité en cours.','Simple perfect pour la quantité achevée ; continuous pour l’activité ou la durée.','I have written two pages. I have been writing all morning.'],
['Remplace une forme continue inadaptée avec un verbe d’état.','Know ou own dans leur sens d’état ne prennent normalement pas le continuous.','I have known her for years, not I have been knowing her.']],
'conditionals':[
['Écris une condition possible et sa conséquence future.','If + présent, will + base ; le sens doit rester possible.','If we leave early, we will arrive on time.'],
['Imagine une situation contraire au présent.','If + prétérit, would + base ; ne raconte pas un passé réel.','If I had more time, I would help.'],
['Exprime un regret sur un événement passé.','If + had + participe, would have + participe.','If we had checked, we would have noticed the error.'],
['Relie une cause passée irréalisée à un résultat présent.','Past perfect dans la condition, would + base dans le résultat actuel.','If I had saved the file, I would not need to rewrite it now.'],
['Écris un souhait présent puis un regret passé avec wish.','Prétérit ou could pour le présent ; past perfect pour le passé.','I wish I had more time. I wish I had started earlier.']],
'patterns':[
['Utilise enjoy, avoid et decide dans trois phrases.','Enjoy/avoid + -ing ; decide + to + base.','We decided to continue, but we avoided making promises.'],
['Compare used to et be used to avec deux situations.','Ancienne habitude + base ; habitude acquise + -ing.','I used to work alone. I am used to working in a team now.'],
['Distingue arrêter une activité et s’arrêter pour en faire une autre.','Stop doing et stop to do ont des sens différents.','We stopped talking to listen to the announcement.'],
['Transforme make actif en passif.','Make + objet + base devient be made + to + base.','They made us wait → We were made to wait.'],
['Écris une consigne à ne pas oublier et un souvenir.','Remember to do rappelle une tâche ; remember doing évoque un souvenir.','Remember to lock the door. I remember locking it.']],
'reported':[
['Rapporte une déclaration au présent dans un récit passé.','Vérifie pronoms et recul temporel, en conservant le sens.','She said, “I am ready” → She said she was ready.'],
['Rapporte une question oui/non.','If/whether puis ordre déclaratif ; pas d’inversion.','He asked whether we had finished.'],
['Rapporte une question avec where ou why.','Sujet avant le verbe ; supprime do auxiliaire s’il ne sert qu’à l’interrogation directe.','She asked where I lived.'],
['Transforme un ordre négatif en discours rapporté.','Tell/ask + personne + not to + base.','He told us not to enter.'],
['Explique un cas où le présent peut rester après said.','La vérité ou l’information peut rester valable ; justifie le contexte.','The teacher said that water boils at a lower temperature at high altitude.']],
'passive':[
['Transforme une action habituelle active en passif.','Le receveur devient sujet ; be au présent + participe.','Volunteers collect the books → The books are collected by volunteers.'],
['Transforme une action en cours en passif.','Am/is/are + being + participe.','The team is repairing the desk → The desk is being repaired.'],
['Énonce un résultat actuel au passif.','Have/has + been + participe.','The forms have been checked.'],
['Oppose une interdiction à une absence d’obligation.','Must not interdit ; do not have to rend facultatif.','You must not enter. You do not have to attend.'],
['Donne une déduction sur un passé puis une obligation passée.','Must have + participe n’est pas had to + base.','It must have rained. We had to postpone the event.']],
'connectors':[
['Exprime la même cause avec because et because of.','Proposition après because ; groupe nominal après because of.','We stopped because it rained / because of the rain.'],
['Exprime une concession avec although puis despite.','Ne cumule pas although et but ; despite ne prend pas directement sujet-verbe.','Although she was tired, she continued. Despite her tiredness, she continued.'],
['Relie deux phrases avec une relative de possession.','Whose détermine le nom possédé ; ne répète pas his/her.','The pupil whose notebook was lost asked for help.'],
['Ajoute une information explicative entre virgules.','Which ou who selon l’antécédent, pas that dans cette relative.','The library, which opened last year, is nearby.'],
['Construis un but et une conséquence dans deux phrases.','In order to + base pour le but ; so…that pour la conséquence.','We arrived early to prepare. The room was so quiet that we could concentrate.']],
'agreement':[
['Écris une phrase avec each of et une avec the quality of.','Le noyau singulier commande le verbe, pas le pluriel qui suit of.','Each of the pupils has a role.'],
['Exprime une quantité d’advice et d’information.','Utilise pieces of pour compter, sans advices ou informations dans ces emplois.','We received two pieces of advice.'],
['Oppose a few et few dans deux situations.','A few indique quelques éléments disponibles ; few souligne leur faible nombre.','We have a few volunteers, enough to begin.'],
['Compare une quantité dénombrable et une quantité indénombrable.','Fewer pour les éléments comptables ; less pour une quantité comme water.','We made fewer mistakes and used less paper.'],
['Corrige un accord trompeur puis explique le sujet réel.','Repère le noyau avant de conjuguer.','The quality of the answers has improved.']],
'time-links':[
['Raconte deux événements passés dont l’un précède l’autre.','Utilise le Past Perfect pour rendre l’antériorité explicite.','The meeting had started when we arrived.'],
['Oppose une durée et un point de départ.','For + durée ; since + départ, y compris une proposition.','We have worked for a week, since the club opened.'],
['Oppose une échéance avec by à une continuation avec until.','By fixe une limite d’accomplissement ; until une fin de durée.','Submit it by Friday. The office stays open until five.'],
['Écris un bilan futur avec une échéance.','Will have + participe situe l’achèvement avant le repère futur.','By Monday, we will have checked every form.'],
['Compare when temporel et when dans une question indirecte.','Présent dans la subordonnée temporelle future ; will possible dans une question indirecte.','We will start when she arrives. I wonder when she will arrive.']],
'word-choice':[
['Distingue emprunter et prêter dans un dialogue.','Borrow from et lend to changent le point de vue.','Could you lend me a pen? I borrowed one from my neighbour.'],
['Corrige une confusion entre actually et currently.','En fait n’est pas actuellement ; donne deux contextes précis.','Actually, she lives in Buea. She is currently visiting Douala.'],
['Décris une personne qui s’ennuie et une activité ennuyeuse.','Bored décrit le ressenti ; boring ce qui le provoque.','The talk was boring, so I felt bored.'],
['Utilise trois collocations sans traduction littérale.','Make a decision, do research et pay attention sont des groupes usuels.','We must make a decision after we do some research.'],
['Compare attend, wait for et assist.','Assister à, attendre et aider sont trois sens différents.','I attended the meeting, waited for a friend and assisted the organiser.']],
'past-future':[
['Raconte une action de fond interrompue par un événement.','Past Continuous pour le fond, Past Simple pour l’événement.','We were talking when the bell rang.'],
['Explique ce qui s’était produit avant l’incident.','Had + participe marque l’antériorité à un passé.','The technician had warned us before the system stopped.'],
['Distingue décision immédiate et intention déjà préparée.','Will peut annoncer la décision ; going to l’intention.','I will help you now. We are going to organise a workshop.'],
['Compare une action future en cours et une action future achevée.','Will be -ing à un moment ; will have + participe avant une échéance.','At ten I will be working. By noon I will have finished.'],
['Rédige un court récit puis une conséquence actuelle.','Garde la chronologie et justifie le passage du prétérit au present perfect.','We lost the notes yesterday. We have now made copies.']],
'tags':[
['Ajoute des tags à deux affirmations avec be.','Reprends be, inverse la polarité et utilise le bon pronom.','She is ready, isn’t she?'],
['Ajoute des tags à deux phrases sans auxiliaire visible.','Choisis do/does/did selon le temps et le sujet.','They arrived early, didn’t they?'],
['Utilise never et nothing avec un tag.','Le sens négatif demande normalement un tag positif.','Nothing changed, did it?'],
['Écris une proposition avec let’s puis une demande de vérification avec I am.','Let’s…shall we ? et I am…aren’t I ? sont des cas usuels.','Let’s begin, shall we? I am next, aren’t I?'],
['Réponds à une question négative en développant la réponse courte.','Yes affirme la réalité positive ; No confirme la négation.','You haven’t finished, have you? Yes, I have.']],
'phrasal':[
['Donne trois consignes avec fill in, hand in et set up.','Respecte le sens : remplir, remettre et créer.','Fill in the form and hand it in tomorrow.'],
['Remplace deux objets nominaux par des pronoms avec un verbe séparable.','Le pronom se place entre verbe et particule.','Turn the light off → Turn it off.'],
['Utilise deux constructions inséparables.','Le complément reste après look after ou depend on.','We depend on them. She looks after the children.'],
['Reformule un phrasal verb par un verbe plus formel.','Conserve le sens exact dans le contexte.','We put off the meeting → We postponed the meeting.'],
['Rédige une demande avec apply for et une phrase avec responsible for.','For introduit le poste ou la responsabilité ; -ing pour l’activité après la préposition.','I applied for the role. I am responsible for checking forms.']],
'preferences':[
['Compare deux solutions avec un comparatif et une limite.','Compare des critères identiques, sans more better.','A is cheaper, but B may last longer.'],
['Exprime l’égalité puis une différence de degré.','As…as pour l’égalité ; much/a little + comparatif pour le degré.','It is as useful as the other one, but much lighter.'],
['Transforme une impossibilité avec too en insuffisance avec enough.','Préserve le sens et inverse l’adjectif si nécessaire.','It is too weak → It is not strong enough.'],
['Exprime une préférence avec prefer puis would rather.','Prefer -ing to -ing ; would rather + base than + base.','I prefer walking to waiting. I would rather walk than wait.'],
['Décris deux évolutions liées avec the more… the more/less.','Les deux propositions doivent avoir une relation compréhensible.','The more carefully we plan, the fewer mistakes we make.']],
'word-building':[
['Forme un nom et un adjectif à partir d’un verbe utile à la situation.','Vérifie catégorie, sens et orthographe sans inventer un suffixe.','Inform → information → informative.'],
['Oppose le responsable d’une action à son bénéficiaire.','Employer et employee n’ont pas le même rôle.','The employer trained the employees.'],
['Transforme un adjectif en adverbe dans une phrase.','L’adverbe modifie l’action, sauf construction attributive avec be/seem.','She gave a clear answer → She answered clearly.'],
['Construis un antonyme avec un préfixe et utilise-le.','Le préfixe dépend du mot ; tous n’acceptent pas un-.','Reliable → unreliable.'],
['Écris un paragraphe avec trois collocations et explique leur sens.','Évite les calques ; conserve verbe, nom et préposition utiles.','Make progress, do research, take responsibility.']],
'social':[
['Présente une compétence en racontant une action concrète.','Situation, action, résultat ; pas une simple liste d’adjectifs.','I organised the tasks and we finished on time.'],
['Demande poliment deux informations à un service.','Could you tell me… + ordre déclaratif ; demande claire.','Could you tell me which documents I need?'],
['Rédige une courte candidature adaptée à une activité scolaire.','Motivation, preuve réelle, disponibilité et conclusion polie.','I would like to apply for the role of club secretary.'],
['Décris un loisir, sa fréquence et son intérêt linguistique.','Habitude au présent simple et exemple concret de bénéfice.','I read short stories twice a week and note useful expressions.'],
['Joue un entretien avec une question de clarification.','Réponds au besoin de l’interlocuteur sans feindre la compréhension.','Could you repeat the last part, please?']],
'economy':[
['Compare deux offres en inventant des chiffres cohérents et annoncés comme fictifs.','Calcule coût total et prix unitaire ; ne les confonds pas.','A costs less per item, but B requires a smaller initial payment.'],
['Écris trois questions sur les frais d’un service.','Vérifie montant, périodicité et ce qui est inclus.','Is there a monthly fee?'],
['Explique un budget de projet en distinguant prévu et reçu.','Futur ou intention pour les prévisions ; bilan pour le réel.','We planned to collect fifty books, but we have received thirty.'],
['Rédige une réclamation factuelle et polie.','Décris le problème, sa preuve et la solution demandée.','The receipt shows a different price. Could you check it?'],
['Attribue des responsabilités et des échéances pour une action collective.','Qui fait quoi, avant quand, et comment rendre compte.','A team will record donations by Friday.']],
'environment':[
['Distingue une observation, une hypothèse et une recommandation.','Ne transforme pas may en certitude ; choisis le modal selon le sens.','The bins are full. Collection may be delayed. We should ask the coordinator.'],
['Explique une cause et une conséquence sans généraliser.','Because, so et therefore doivent relier des idées justifiées.','The labels are unclear, so some pupils use the wrong bin.'],
['Décris un processus avec trois passifs.','Be au bon temps + participe ; ordre logique des étapes.','Paper is collected, sorted and stored.'],
['Propose deux actions et une condition de réussite.','Actions concrètes, responsabilité et limite reconnue.','The plan will help if collection is organised regularly.'],
['Rédige un message de sensibilisation respectueux.','Évite la stigmatisation, les chiffres inventés et les promesses absolues.','Everyone can ask for reliable information and support.']],
'citizenship':[
['Développe une opinion avec une raison et un exemple.','Distingue ton avis d’un fait établi ; pas de everyone sans preuve.','I believe regular meetings help because concerns can be recorded.'],
['Décris les résultats fictifs d’un sondage limité.','Annonce l’échantillon, les résultats et la limite de généralisation.','In our sample of twenty pupils, twelve preferred option A.'],
['Rapporte une opinion sans modifier sa force.','Some reste some ; may reste une possibilité.','She said that the plan might improve participation.'],
['Rédige une ouverture et une conclusion de discours.','Adresse au public, objectif et action réaliste.','Dear fellow students… Let us begin with a small, measurable change.'],
['Exprime un désaccord respectueux et propose un compromis.','Reconnais l’idée puis explique sa limite avec un exemple.','I understand your point; however, we also need to consider the cost.']],
'media':[
['Liste en anglais trois vérifications avant de partager une information.','Date, source originale et confirmation indépendante pertinente.','Check when it was published and who produced it.'],
['Explique un problème numérique avec les actions déjà essayées.','Distingue incident passé, résultat actuel et demande.','The upload failed. I have checked the file size.'],
['Compare deux conditions d’abonnement fictives.','Volume, validité et frais ; ne suppose pas une condition absente.','Does unused data expire at the end of the week?'],
['Reformule une affirmation trop certaine avec une nuance.','May/could et portée limitée, sans changer les faits.','The tool may help some pupils revise more regularly.'],
['Rédige un paragraphe équilibré sur un usage scolaire du numérique.','Avantage expliqué, risque et condition d’utilisation.','Online resources are useful if pupils check sources and practise actively.']],
'reading-method':[
['Écris un mini-texte de quatre phrases puis une question explicite.','La réponse doit être directement présente et identifiable.','The club opened on Monday. Question: When did it open?'],
['À partir de ton mini-texte, formule une inférence et cite son indice.','L’inférence doit découler d’une preuve sans aller au-delà.','She checked twice before replying: this suggests caution.'],
['Ajoute une question dont la réponse n’est pas dans le texte.','Explique pourquoi not stated diffère de false.','The passage gives no age, so we cannot identify the pupil’s age.'],
['Reformule une phrase en conservant sa nuance.','Conserve sujet, action, temps et degré de certitude.','Some readers may benefit → The activity could help certain readers.'],
['Repère un pronom et explique précisément son antécédent.','La référence peut être une personne, un objet ou une idée complète.','The club changed its rule. This helped newcomers: this refers to the change.']],
'composition-method':[
['Rédige un plan de quatre paragraphes adapté à la situation.','Introduction, deux idées développées, conclusion ; respecte le genre.','Problème → action 1 illustrée → action 2 avec limite → proposition finale.'],
['Développe un paragraphe avec idée, raison, exemple et nuance.','Chaque phrase doit faire avancer l’argument plutôt que le répéter.','A club can build confidence because pupils practise in small groups.'],
['Transforme la même demande en courriel formel et en dialogue.','Adapte salutation, registre et longueur sans changer le besoin.','I would like to request… / Could you help me with…?'],
['Rédige une objection puis une réponse argumentée.','Reconnais une limite réelle, apporte une solution proportionnée.','Although the plan takes time, a weekly rota can distribute the work.'],
['Écris 150–200 mots puis réécris ton paragraphe le plus faible.','Relis consigne, organisation, grammaire, vocabulaire et ponctuation séparément.','Explique deux changements précis apportés à ta seconde version.']],
'oral-method':[
['Prépare un dialogue de six répliques avec une clarification.','Question, réponse, vérification et confirmation ; change les données à la reprise.','Do you mean Tuesday morning?'],
['Lis une phrase avec deux accents de contraste différents.','Explique comment le mot accentué change ce que tu corriges.','I asked for TWO copies, not three.'],
['Dicte trois consignes à un camarade puis fais-les reformuler.','Vérifie l’ordre et les mots essentiels, pas seulement la répétition mécanique.','First check the list, then sign the form.'],
['Présente une idée en une minute avec une pause entre les arguments.','Message compréhensible, exemples concrets, débit adapté.','I suggest two changes. First… Second…'],
['Enregistre deux versions et choisis un objectif précis de progrès.','Compare intelligibilité, négation, terminaisons et rythme ; pas de faux score phonétique.','Dans la seconde version, je fais mieux entendre not et les pluriels.']]
};
Object.assign(objectives,enrichmentObjectives,v4Objectives);
export function variantsFor(id){return (objectives[id]||[]).flatMap(([instruction,criteria,model],family)=>contexts.map(([name,context],scene)=>({id:`${id}-f${family}-s${scene}`,family,scene,name:englishContexts[scene][0],prompt:`${practiceEnglish[id].split("|")[family]} Context: ${englishContexts[scene][0]}. ${englishContexts[scene][1]}`,promptFr:`${instruction} Contexte : ${name.toLowerCase()}. ${context}`,criteria,model})));}
export function drawVariants(id,seen=[],count=5,rng=Math.random){const pool=variantsFor(id);const fresh=pool.filter(q=>!seen.includes(q.id));const available=fresh.length?fresh:pool;const chosen=[];for(let family=0;family<5;family++){const group=available.filter(q=>q.family===family);if(group.length)chosen.push(group[Math.floor(rng()*group.length)])}return chosen.slice(0,count);}
