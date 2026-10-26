export const skills=['simple','continuous','perfect','perfect-continuous'];
export const empty=()=>({version:2,answers:[],sections:[],cards:{},seen:[],days:[],goal:10,writing:''});
export function load(storage){try{const x=JSON.parse(storage.getItem('rm-academy-v2'));if(x?.version!==2)return empty();const v=empty();v.answers=Array.isArray(x.answers)?x.answers.filter(a=>a&&typeof a.id==='string'&&typeof a.skill==='string'&&typeof a.ok==='boolean'&&Number.isFinite(a.time)).slice(-5000):[];v.sections=Array.isArray(x.sections)?x.sections.filter(y=>typeof y==='string'):[];v.seen=Array.isArray(x.seen)?x.seen.filter(y=>typeof y==='string'):[];v.days=Array.isArray(x.days)?x.days.filter(y=>/^\d{4}-\d{2}-\d{2}$/.test(y)):[];v.cards=x.cards&&typeof x.cards==='object'&&!Array.isArray(x.cards)?Object.fromEntries(Object.entries(x.cards).filter(([,c])=>c&&Number.isFinite(c.due)&&Number.isFinite(c.step)&&c.step>=0&&c.step<=5)):{};v.goal=[5,10,15].includes(x.goal)?x.goal:10;v.writing=typeof x.writing==='string'?x.writing.slice(0,10000):'';return v}catch{return empty()}}
export function save(storage,state){try{storage.setItem('rm-academy-v2',JSON.stringify(state));return true}catch{return false}}
export const day=(time=Date.now())=>new Date(time).toLocaleDateString('en-CA');
export function shuffle(a,rng=Math.random){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
export function mastery(state,skill,now=Date.now()){const a=state.answers.filter(a=>a.skill===skill).slice(-20);const correct=a.filter(x=>x.ok).length;const ratio=a.length?correct/a.length:0;const distinct=new Set(a.map(x=>x.id)).size;let status=!a.length?'Non étudiée':a.length<5?'En apprentissage':ratio<.7?'Fragile':ratio>=.85&&distinct>=8?'Maîtrisée':'En apprentissage';if(a.length&&now-a.at(-1).time>7*86400000)status='À réviser';return{count:a.length,ratio,status,distinct}}
export function selectQuestions(bank,state,{skill='all',level=3,count=10,adaptive=false,review=false}={}){
 let candidates=bank.filter(q=>(skill==='all'||q.skill===skill)&&q.level<=level);
 if(review){const ids=new Set(Object.entries(state.cards).filter(([,c])=>c.due<=Date.now()).map(([id])=>id));return shuffle(candidates.filter(q=>ids.has(q.id))).slice(0,count)}
 const seen=new Set(state.seen),unseen=candidates.filter(q=>!seen.has(q.id));
 // Exhaust fresh material before repeating. A short session is explicit in its counter.
 const pool=unseen.length?unseen:candidates;
 const groups=new Map();
 for(const q of shuffle(pool)){if(!groups.has(q.skill))groups.set(q.skill,[]);groups.get(q.skill).push(q)}
 for(const group of groups.values())group.sort((a,b)=>Number(!!a.generated)-Number(!!b.generated));
 let order=shuffle([...groups.keys()]);
 if(adaptive)order.sort((a,b)=>mastery(state,a).ratio-mastery(state,b).ratio);
 const chosen=[];
 while(chosen.length<count){let added=false;for(const key of order){const q=groups.get(key).shift();if(q){chosen.push(q);added=true}if(chosen.length===count)break}if(!added)break}
 return shuffle(chosen);
}
export function record(state,q,chosen,now=Date.now()){const ok=chosen===q.correct;state.answers.push({id:q.id,skill:q.skill,chosen,ok,time:now});state.answers=state.answers.slice(-5000);state.seen=[...new Set([...state.seen,q.id])];const today=day(now);if(!state.days.includes(today))state.days.push(today);state.days=state.days.slice(-365);const old=state.cards[q.id]||{step:0};const step=ok?Math.min(old.step+1,5):0;const days=[1,3,7,14,30,60];state.cards[q.id]={step,due:now+days[step]*86400000};return ok}
export function streak(state,now=Date.now()){let n=0,d=new Date(now);if(!state.days.includes(day(d)))d.setDate(d.getDate()-1);while(state.days.includes(day(d))){n++;d.setDate(d.getDate()-1)}return n}
export const normalize=x=>x.trim().toLowerCase().replace(/[’]/g,"'").replace(/[.!?]+$/,'').replace(/\s+/g,' ');
