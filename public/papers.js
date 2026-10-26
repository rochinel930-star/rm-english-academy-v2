const gap=(prompt,answer,why)=>({prompt,answer,why,points:2});
const read=(prompt,answer,why)=>({prompt,answer,why,points:2,manual:true});
export const papers=[
{id:'community',title:'Sujet 1 · Une bibliothèque pour tous',theme:'Vie sociale, économie et participation',text:`When the only reading room in their neighbourhood closed for repairs, a group of final-year pupils in Bafoussam decided to create a temporary book exchange. Their first idea was simple: every member would bring a book and borrow another. Yet a meeting with younger pupils revealed a problem. Some families owned no books to contribute. If membership depended on a donation, the project would exclude precisely the readers who needed it most.

The organisers therefore changed the rule. Anyone could borrow a book after registering with the volunteer on duty. Donations were welcome but not compulsory. A local shopkeeper offered two shelves, while a retired teacher helped the group classify the books. The pupils kept a record of loans in a notebook. They deliberately avoided publishing borrowers’ names online, explaining that public recognition should not come at the expense of privacy.

After a month, the group had received sixty books. However, the number alone did not tell the whole story. Several books were too damaged to use, and most were written for adults. The volunteers began asking potential donors for suitable material rather than simply requesting more donations. They also introduced a weekly reading session in which older pupils helped younger readers discuss a short passage. The sessions were not intended to replace lessons. Their purpose was to make reading a shared activity rather than an isolated task.

Not everything worked immediately. Some books were returned late, and volunteers occasionally forgot their duties. Instead of blaming borrowers in public, the group introduced private reminders and a simple rota. Attendance improved, although the organisers could not yet tell whether the project had raised examination results. They had not collected evidence that would support such a claim.

At the end of the term, the pupils wrote a report for the neighbourhood committee. They described the difficulties as carefully as the successes and asked for a dry storage space during the rainy season. Their conclusion was modest: a useful community project does not depend only on enthusiasm. It also needs rules that include people, records that reveal problems and volunteers willing to change their plans.`,grammar:[
gap('Complete with the correct form: When the room closed, the pupils ___ for their examinations. (prepare, action in progress)','were preparing','Le cadre était en cours au moment de la fermeture : were + preparing.'),
gap('Complete: If every borrower ___ to donate a book, some pupils would be excluded. (have)','had','Condition hypothétique présente : if + prétérit, would + base dans le résultat.'),
gap('Complete: The books ___ on the shelves every Friday. (arrange, present passive)','are arranged','Présent simple passif, sujet pluriel : are + participe arranged.'),
gap('Complete the tag: Donations are not compulsory, ___?','are they','Proposition négative avec are ; tag positif avec they.'),
gap('Complete: The volunteers look forward to ___ more readers. (welcome)','welcoming','Look forward to contient une préposition : welcoming, pas welcome.')],vocabulary:[
gap('Give the noun for a person who offers time without payment: a ___.','volunteer','Volunteer désigne ici un bénévole.'),
gap('Complete with the correct form: The organisers made an important ___. (decide)','decision','Après an important, le nom singulier decision est attendu.'),
gap('Complete: Readers can borrow books ___ the exchange.','from','Borrow from marque la source de l’emprunt.'),
gap('Give the opposite of compulsory in this context.','optional','Optional signifie facultatif, par opposition à obligatoire.'),
gap('Complete the phrasal verb: They decided to set ___ a reading group.','up','Set up signifie créer ou mettre en place.')],reading:[
read('Why did the organisers change their original membership rule?','Some pupils had no books to donate, so a compulsory donation would exclude them.','2 : cause et exclusion expliquées ; 1 : manque de livres seulement ; 0 : cause absente ou contradictoire.'),
read('Mention two forms of support provided by adults.','A shopkeeper offered shelves, and a retired teacher helped classify the books.','1 point par contribution correcte ; maximum 2.'),
read('Why was the total number of donated books an incomplete measure of success?','Some books were damaged and many were unsuitable for younger readers.','1 point pour l’état des livres, 1 pour l’adéquation au public.'),
read('What evidence shows that the group respected borrowers’ privacy?','It did not publish borrowers’ names online and used private reminders.','1 point par mesure précise et fidèle au texte.'),
read('Can the organisers claim that examination results improved? Explain.','No. They had not collected evidence to show an effect on examination results.','1 point pour la réponse négative, 1 pour la justification liée à l’absence de preuve.')],writing:'Your school wants to start a community learning project. Write a proposal of 200–250 words describing the need, two practical activities, how you would include pupils with limited resources, and how you would assess the project. Do not simply retell the passage.',outline:['Présenter un besoin concret et le public concerné.','Développer deux activités avec responsables et calendrier.','Expliquer comment participer sans contribution financière obligatoire.','Prévoir un bilan réaliste : participation, retours et difficultés, sans inventer d’effet sur les notes.'],model:'A proposal could introduce a weekly study circle and a shared shelf of learning materials. It should explain who manages each activity, how newcomers are welcomed, and how feedback is collected. A strong conclusion acknowledges that attendance alone does not prove learning and proposes short review activities or teacher feedback.'},
{id:'media-literacy',title:'Sujet 2 · Une information à vérifier',theme:'Médias, esprit critique et citoyenneté',text:`A message claiming that all lessons would be cancelled on Friday spread through a school discussion group on Wednesday evening. It carried the school’s name and a familiar photograph of the entrance. Within an hour, several pupils had forwarded it to relatives. Some were relieved because they had not finished an assignment. Others worried about missing a practical lesson that could not easily be repeated.

Mado, one of the editors of the school newsletter, noticed that the message contained no date or signature. The photograph seemed genuine, but that did not prove the announcement was current. She asked the sender where it had come from. He explained that he had copied it from another group and had assumed that someone else had checked it. Mado then contacted the school office through its usual public channel rather than using the telephone number printed in the message.

The office confirmed that lessons would continue normally. The photograph had accompanied an announcement about repairs the previous year. Someone had removed the original date, and the old announcement had acquired a new meaning as it travelled between groups. Mado wrote a correction, explaining both the official response and the steps she had taken to obtain it. She did not identify the pupil who had first shared the message with her. Her aim was to correct the claim, not to invite public humiliation.

The correction travelled more slowly than the original message. A few pupils said that checking every story would take too much time. During a discussion the next day, Mado agreed that nobody could investigate everything in depth. However, she argued that a claim affecting attendance, money or personal information deserved extra care. Pausing before forwarding it could prevent a larger problem later.

The newsletter team subsequently produced a short checklist: look for a date, identify the original source, compare the claim with a reliable channel and distinguish a photograph from the interpretation attached to it. The checklist did not promise to make readers immune to mistakes. It was intended to make verification a habit, especially when a message seemed unusually convenient, frightening or urgent.`,grammar:[
gap('Complete: Before Mado checked it, several pupils ___ the message. (forward)','had forwarded','Le partage précède la vérification passée : had + participe.'),
gap('Complete: She asked where the announcement ___ from. (come, reported past)','came','Question indirecte au passé : ordre déclaratif, came.'),
gap('Complete: If the office confirms the news, we ___ our plans. (change)','will change','Condition future possible : présent dans if, will dans la principale.'),
gap('Complete: The photograph ___ the previous year. (take, past passive)','was taken','Passif passé : was + participe irrégulier taken.'),
gap('Complete: Avoid ___ personal details in public groups. (share)','sharing','Avoid prend une forme en -ing.')],vocabulary:[
gap('Complete: The team checked the ___ of the claim. (accurate)','accuracy','Le nom accuracy désigne l’exactitude.'),
gap('Give the opposite of reliable using a prefix.','unreliable','Unreliable signifie non fiable.'),
gap('Complete: Please find ___ where the message originated.','out','Find out signifie découvrir une information.'),
gap('Complete: The correction was published ___ Wednesday.','on','On accompagne un jour de la semaine.'),
gap('Choose the correct word for a source that can be trusted: reliable / relieved / related.','reliable','Reliable décrit la fiabilité, pas le soulagement ou la relation.')],reading:[
read('Give two details that made Mado question the message.','It had no date and no signature.','1 point par détail exact ; la photographie seule ne prouve pas une falsification.'),
read('How did Mado obtain a reliable confirmation?','She contacted the school office through its usual public channel.','2 : organisme et canal habituel ; 1 : mention du bureau seulement.'),
read('Explain how an old photograph contributed to a misleading message.','It accompanied an old announcement whose date had been removed, making it seem current.','1 point pour l’ancienneté, 1 pour l’effet de l’absence de date.'),
read('Why did Mado avoid identifying the pupil who shared the message?','She wanted to correct the claim without publicly humiliating the pupil.','2 : objectif et respect de la personne ; 1 : un seul élément.'),
read('What limitation of the checklist does the final paragraph acknowledge?','It cannot prevent every mistake; it is meant to encourage a habit of checking.','1 point pour la limite, 1 pour l’objectif réaliste.')],writing:'Write an article of 200–250 words for your school newsletter on responsible use of online information. Explain two risks, propose two practical verification habits, and discuss one difficulty pupils may face. Give your article a suitable title.',outline:['Titre informatif et problème clairement introduit.','Deux risques expliqués, sans reprendre le passage mot à mot.','Deux habitudes concrètes, avec exemples.','Une difficulté et une solution réaliste ; conclusion destinée aux élèves.'],model:'A possible article contrasts speed with accuracy. It could explain how an outdated message affects school attendance and how a false request exposes private information. Practical habits include checking dates and using an established source. The difficulty of limited time can be addressed by prioritising claims with serious consequences rather than pretending every claim can be investigated fully.'},
{id:'environment-project',title:'Sujet 3 · Un projet qui apprend de ses erreurs',theme:'Environnement, organisation et communication',text:`The environmental club at a lycée in Yaoundé began its recycling project with an ambitious announcement. By the end of the term, it hoped to reduce the amount of mixed waste produced at school. The members painted three large containers in different colours and placed them near the main courtyard. On the first day, many pupils stopped to admire them. The club took photographs and celebrated what seemed to be a successful launch.

Two weeks later, the contents of the containers told a different story. Food scraps, paper and plastic had often been placed together. Some labels were difficult to read from a distance, and the colours meant different things to different pupils. The cleaners also explained that nobody had told them where to take the separated materials. The project had supplied containers without designing the whole collection process.

Rather than abandon the idea, the club invited pupils and cleaners to a meeting. Members listened before proposing solutions. They replaced the labels with clear words and simple pictures, demonstrated the system during a break and agreed on a collection timetable. A local organisation explained which materials it could actually accept. This information mattered: collecting an item separately would serve little purpose if no suitable destination had been arranged for it.

The club also changed how it judged progress. Instead of counting photographs or online reactions, members checked the contents of the containers once a week and recorded common mistakes. They asked the cleaners whether the new arrangement was practical. The records showed gradual improvement, but the club avoided claiming that the entire school had changed its habits. Some areas still had no containers, and the observations covered only a short period.

For the final report, the pupils described both the original mistake and the changes that followed. They argued that listening to the people who use and maintain a service is part of planning, not an optional activity after a project has begun. Their next proposal was smaller than the first announcement, but it included responsibilities, a realistic timetable and a way to check whether the system was working.`,grammar:[
gap('Complete: At the launch, pupils ___ photographs when the bell rang. (take, ongoing action)','were taking','Action de fond au passé : were taking.'),
gap('Complete: The labels were too small ___ from a distance. (read, passive infinitive)','to be read','Too + adjectif + infinitif ; labels reçoit l’action : to be read.'),
gap('Complete: The club would have avoided confusion if it ___ the cleaners earlier. (consult)','had consulted','Condition irréelle passée : if + past perfect.'),
gap('Complete: Each of the containers ___ a clear label now. (have)','has','Each est singulier malgré containers dans le complément.'),
gap('Complete: The more carefully we plan, the ___ mistakes we make. (few)','fewer','Comparaison corrélative ; mistakes est dénombrable pluriel.')],vocabulary:[
gap('Complete: The project requires better ___. (organise)','organisation','Nom attendu après better ; organisation et organization sont deux graphies admises.',),
gap('Complete: We must dispose ___ waste responsibly.','of','Dispose of est la construction complète.'),
gap('Give the opposite of success.','failure','Failure désigne l’échec ; il s’agit ici d’une opposition lexicale.'),
gap('Complete: The team will carry ___ a survey.','out','Carry out signifie mener ou effectuer.'),
gap('Complete: All members should take ___. (responsible)','responsibility','Take responsibility est une collocation ; responsible est l’adjectif.')],reading:[
read('What was the club’s original objective?','It hoped to reduce mixed waste at school by the end of the term.','1 point pour la réduction des déchets mélangés, 1 pour le repère temporel.'),
read('Identify two reasons why the first arrangement failed to work well.','Labels were hard to read, colours were confusing, and cleaners lacked collection instructions.','1 point par raison exacte, maximum 2 ; trois raisons possibles.'),
read('Why was the local organisation’s advice important?','It identified which materials could be accepted, ensuring a destination for separated waste.','1 point pour les matières acceptées, 1 pour la destination nécessaire.'),
read('How did the club improve its assessment of progress?','It inspected the containers weekly, recorded mistakes and asked cleaners for feedback.','1 point par méthode pertinente, maximum 2.'),
read('Explain the lesson expressed in the last paragraph.','Users and maintenance staff should be consulted during planning, with clear responsibilities and a way to evaluate the project.','2 : consultation dès la planification et organisation vérifiable ; 1 : réponse partielle.')],writing:'Write a speech of 200–250 words to persuade fellow pupils to take part in a realistic environmental project. Explain the problem, assign responsibilities, describe how you would measure progress, and acknowledge one possible obstacle. Use an appropriate opening and closing.',outline:['Adresse au public et objectif clair.','Problème illustré par un exemple, sans chiffres inventés.','Activités, responsabilités et calendrier.','Mesure du progrès, obstacle et réponse ; invitation finale à agir.'],model:'A speech may begin with Dear fellow students and propose a small pilot project in one part of the school. It should name the tasks, explain who will collect observations and include the cleaners in planning. Rather than promising immediate transformation, it can invite pupils to review the first results after a few weeks and adjust the system together.'}
];
// Explicit accepted spelling variants; free meaning is assessed with a rubric, never exact text matching.
papers[2].vocabulary[0].alternatives=['organization'];
papers[0].vocabulary[3].alternatives=['voluntary','non-compulsory','not compulsory'];
papers[0].model=`A learning circle for our school

Many pupils would like to revise with others, but they cannot always buy extra materials or pay for private lessons. Our school could respond by creating a free learning circle that combines shared resources with regular practice.

First, volunteers could organise a weekly study session in an available classroom. Each meeting would focus on one difficulty, such as interpreting a reading question or planning a paragraph. Pupils would attempt a short task before discussing their answers. A teacher could help the group check explanations without having to lead every activity.

Second, the club could create a shelf of donated textbooks and printed exercises. Borrowing should not depend on making a donation. A small team would record loans privately and check the condition of materials. Pupils without internet access could therefore participate on equal terms.

The project would need a clear timetable and a rota so that the same volunteers were not responsible every week. After a month, members could collect anonymous feedback and compare a short practice task with an earlier one. These observations would indicate what needs improvement, although they would not prove that every change in examination results came from the club.

We suggest beginning with one weekly session and reviewing the arrangement before expanding it. A modest project that includes everyone would be more useful than an ambitious plan that soon stops working.`;
papers[1].model=`Before you press Forward

An online message can reach a whole class in minutes. That speed is useful, but it also allows mistakes to travel before anyone has checked them. Responsible sharing should therefore become part of our school habits.

One risk is acting on outdated information. A genuine announcement from last year may lead pupils to miss a lesson if its date is removed. Another risk concerns privacy: a convincing message may ask readers to send personal details to an unfamiliar contact. A familiar logo alone does not establish that a request is trustworthy.

Two simple habits can reduce these problems. First, look for the original source and publication date rather than relying only on a screenshot. Second, compare important claims with an established channel, such as the school office, before forwarding them. If a mistake has already been shared, publish a clear correction without humiliating the person who passed it on.

Checking information takes time, and pupils may have limited mobile data. We cannot investigate every small claim in depth. However, messages affecting attendance, money or personal information deserve particular care. Waiting until a reliable confirmation is available is often better than spreading an urgent claim immediately.

Our aim should not be to distrust everything. It should be to match our confidence to the evidence and make sharing a thoughtful choice rather than an automatic reaction.`;
papers[2].model=`Dear fellow students,

We all want a cleaner school, but a new bin or an attractive poster will not solve the problem by itself. I propose a small project that we can organise, observe and improve together.

Let us begin in one part of the courtyard. A volunteer team could ask pupils and cleaners which waste is most common and where collection is difficult. We could then label suitable containers with clear words and pictures. Before the launch, we should agree on where the collected materials will go and who will be responsible for moving them.

The work must be shared fairly. One team could explain the system during a break, another could keep a weekly record, and a rotating group could check that the labels remain readable. Cleaners should be consulted throughout the project because their experience can reveal problems that we may overlook.

To judge progress, we could record common sorting mistakes and ask whether the arrangement makes collection easier. We should not confuse the number of photographs with the quality of the result. A possible obstacle is that volunteers may become unavailable during examinations, so the timetable must remain realistic.

After four weeks, we could discuss what worked and change what did not. Please join us in building a project that learns from its mistakes. Small, consistent actions can give us a stronger foundation than promises we cannot keep.

Thank you for listening.`;
export function paperItems(p){return [...p.grammar.map(q=>({...q,area:'Grammar'})),...p.vocabulary.map(q=>({...q,area:'Vocabulary'})),...p.reading.map(q=>({...q,area:'Reading'})),{prompt:p.writing,answer:p.model,why:p.outline.join(' '),area:'Composition',manual:true,points:10}];}
