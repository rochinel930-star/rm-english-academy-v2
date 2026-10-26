import json, pathlib, html
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader
base=pathlib.Path(__file__).resolve().parent.parent
papers=json.loads((base/'test-results'/'papers.json').read_text(encoding='utf-8'))
out=base/'public'/'downloads';out.mkdir(exist_ok=True)
pdfmetrics.registerFont(TTFont('RM','C:/Windows/Fonts/arial.ttf'))
pdfmetrics.registerFont(TTFont('RM-Bold','C:/Windows/Fonts/arialbd.ttf'))
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='RM',fontName='RM',fontSize=10,leading=15,spaceAfter=9,textColor=colors.HexColor('#292b25')))
styles.add(ParagraphStyle(name='RMTitle',fontName='RM-Bold',fontSize=22,leading=27,spaceAfter=20,textColor=colors.HexColor('#93412e')))
styles.add(ParagraphStyle(name='RMHead',fontName='RM-Bold',fontSize=13,leading=18,spaceBefore=10,spaceAfter=12,textColor=colors.HexColor('#285c48')))
def para(t,sty='RM'):return Paragraph(html.escape(t).replace('\n','<br/>'),styles[sty])
def footer(canvas,doc):
 canvas.setStrokeColor(colors.HexColor('#deddd1'));canvas.line(45,42,550,42)
 canvas.setFont('RM',8);canvas.setFillColor(colors.HexColor('#636557'))
 canvas.drawString(45,29,'RM Digital Ecom · WhatsApp +237 695 60 45 47 · Sujet original, non officiel')
 canvas.drawRightString(550,29,str(doc.page))
def heading(p,kind):return [para('RM ENGLISH ACADEMY · VERSION 3','RMHead'),para(p['title']+' — '+kind,'RMTitle')]
def lines(n):
 result=[]
 for _ in range(n):result.extend([Spacer(1,16),HRFlowable(width='100%',thickness=.4,color=colors.HexColor('#deddd1'))])
 return result
report=[]
for p in papers:
 story=heading(p,'SUJET')+[para('Entraînement Terminale littéraire · Durée proposée : 3 heures · Barème pédagogique : 40 points.'),para('Grammar /10 · Vocabulary /10 · Reading /10 · Composition /10. Répondre en anglais. Le corrigé est séparé. Ce sujet RM n’est pas une épreuve officielle et son format ne vaut pas homologation.'),para('Nom ou pseudonyme (facultatif) : ____________________ Date : __________')]
 for area,items in [('A · GRAMMAR /10',p['grammar']),('B · VOCABULARY /10',p['vocabulary'])]:
  story.append(para(area,'RMHead'))
  for i,q in enumerate(items):story.extend([para(f'{i+1}. {q["prompt"]} (2 points)'),para('Réponse : ______________________________________________')])
 story += [PageBreak(),para('C · READING /10','RMTitle'),para('Read the passage, then answer the questions on the next page.')]
 story += [para(t) for t in p['text'].split('\n\n')]
 story += [PageBreak(),para('C · READING — QUESTIONS','RMTitle')]
 for i,q in enumerate(p['reading']):story += [para(f'{i+1}. {q["prompt"]} (2 points)')]+lines(2)+[Spacer(1,10)]
 story += [PageBreak(),para('D · COMPOSITION /10','RMTitle'),para(p['writing']),para('Grille : pertinence /3 ; organisation /2 ; grammaire /2 ; vocabulaire /2 ; orthographe et ponctuation /1.'),para('Prépare ton plan puis rédige. Tu peux utiliser une feuille supplémentaire.')]+lines(20)
 path=out/(p['id']+'-sujet.pdf');SimpleDocTemplate(str(path),pagesize=(595.28,841.89),rightMargin=45,leftMargin=45,topMargin=45,bottomMargin=60,title=p['title']+' - Sujet',author='RM Digital Ecom').build(story,onFirstPage=footer,onLaterPages=footer)
 story=heading(p,'CORRIGÉ GUIDÉ')+[para('Réponses fermées : 20 points automatiques possibles. Reading et Composition : 20 points évalués avec les critères, pas par comparaison exacte au modèle. Une réponse formulée autrement peut être correcte.')]
 for area,items in [('A · GRAMMAR /10',p['grammar']),('B · VOCABULARY /10',p['vocabulary'])]:
  story.append(para(area,'RMHead'))
  for i,q in enumerate(items):story.extend([para(f'{i+1}. {q["answer"]}'+(' / '+', '.join(q['alternatives']) if q.get('alternatives') else '')),para(q['why'])])
 story += [PageBreak(),para('C · READING /10','RMTitle'),para('Les réponses suivantes sont des modèles. Accepter une autre formulation fidèle, avec les éléments nécessaires.')]
 for i,q in enumerate(p['reading']):story.extend([para(f'{i+1}. {q["prompt"]}','RMHead'),para(q['answer']),para(q['why'])])
 story += [PageBreak(),para('D · COMPOSITION /10','RMTitle'),para(p['writing']),para('Plan possible','RMHead')]+[para('• '+x) for x in p['outline']]+[para('Exemple complet — une réponse possible','RMHead'),para(p['model']),PageBreak(),para('Grille analytique et réécriture','RMTitle'),para('Pertinence /3 : sujet, destinataire, genre et points demandés. Organisation /2 : paragraphes, liens logiques et progression. Grammaire /2 : correction et variété. Vocabulaire /2 : précision et collocations. Orthographe et ponctuation /1.'),para('Pour chaque critère, justifie ton appréciation avec un passage de ta copie. Une grille n’est pas un correcteur automatique. Demande si possible une relecture à ton professeur. Réécris ensuite le passage le moins convaincant.'),para('Bilan personnel','RMHead'),para('Réponses fermées : ____ /20. Lecture : ____ /10 (auto-évaluation). Composition : ____ /10 (auto-évaluation). Total auto-estimé : ____ /40.'),para('Deux notions à revoir : ______________________________________'),para('Une amélioration à réinvestir dans le prochain sujet : __________________')]
 path2=out/(p['id']+'-corrige.pdf');SimpleDocTemplate(str(path2),pagesize=(595.28,841.89),rightMargin=45,leftMargin=45,topMargin=45,bottomMargin=60,title=p['title']+' - Corrigé',author='RM Digital Ecom').build(story,onFirstPage=footer,onLaterPages=footer)
 for path in [path,path2]:
  pdf=PdfReader(str(path));text='\n'.join(pg.extract_text() for pg in pdf.pages)
  assert len(text)>2000 and 'COMPOSITION' in text and '695 60 45 47' in text
  report.append({'file':path.name,'pages':len(pdf.pages),'bytes':path.stat().st_size})
(base/'test-results'/'pdf-report.json').write_text(json.dumps(report,indent=2),encoding='utf8')
print(json.dumps(report))
