'use strict';
const d = window.SC200;
const fmt = n => new Intl.NumberFormat('da-DK',{maximumFractionDigits:1}).format(n);
const total = d.baselineHours + d.modules.reduce((n,m)=>n+m.hours,0);
const done = d.baselineHours + d.modules.reduce((n,m)=>n+m.completed,0);
const planDone = d.baselineHours + d.modules.reduce((n,m)=>n+(m.progressRange ? m.hours*(m.progressRange[0]+m.progressRange[1])/200 : m.completed),0);
const percent = Math.min(100,planDone/total*100);
document.querySelector('#percent').textContent = '≈ '+fmt(percent)+' %';
document.querySelector('#ring').style.setProperty('--progress',percent+'%');
document.querySelector('#done').textContent = fmt(done)+' t';
document.querySelector('#remaining').textContent = '≈ '+fmt(Math.max(0,total-planDone))+' t';
document.querySelector('#budget').textContent = 'Af ca. '+fmt(total)+' timers samlet budget';
document.querySelector('#updated').textContent = new Intl.DateTimeFormat('da-DK',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(d.updated+'T12:00:00Z'));
document.querySelector('#updated').dateTime = d.updated;
document.querySelector('#nextTitle').textContent = d.next;
document.querySelector('#repoLink').href = d.repository;
function el(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;}
d.modules.forEach((m,i)=>{
 const row=el('article','module'+(m.priority?' priority':''));
 row.append(el('span','number',String(i+1).padStart(2,'0')));
 const body=el('div','module-body');body.append(el('h3','',m.name),el('p','muted',m.description));
 const meta=el('div','module-meta');meta.append(el('span','status',m.status));if(m.priority)meta.append(el('span','priority-label','Største prioritet'));body.append(meta);
 const progress=el('progress');progress.max=m.progressRange ? 100 : m.hours;progress.value=m.progressRange ? (m.progressRange[0]+m.progressRange[1])/2 : m.completed;if(m.progressRange)progress.setAttribute('aria-valuetext','Ca. '+m.progressRange.join('–')+' % gennemført');progress.setAttribute('aria-label',m.name+' progression');body.append(progress);
 row.append(body,el('strong','hours',m.progressRange ? 'Ca. '+fmt(m.completed)+' t brugt · '+fmt(m.hours)+' t budget' : fmt(m.completed)+' / '+fmt(m.hours)+' t'));row.lastChild.style.whiteSpace='normal';row.lastChild.style.maxWidth='115px';document.querySelector('#modules').append(row);
});
d.baseline.forEach(s=>{const cell=el('div','skill '+s.tone);cell.append(el('span','',s.name),el('strong','',s.level));document.querySelector('#heatmap').append(cell);});
d.criteria.forEach(([title,body],i)=>{const item=el('article','criterion');item.append(el('span','criterion-number',String(i+1).padStart(2,'0')),el('h3','',title),el('p','muted',body),el('small','','Afventer vurdering'));document.querySelector('#criteria').append(item);});

for (const [key,label,tone] of [['learned','Lært','strong'],['training','Under træning','medium']]) {
 (d[key] || []).forEach(name=>{const cell=el('div','skill '+tone);cell.append(el('span','',name),el('strong','',label));document.querySelector('#trainingResults').append(cell);});
}

const resultList=document.querySelector('#sessionResults');
(d.results || []).forEach(result=>resultList.append(el('li','',result)));
const kql=el('div','skill strong');kql.style.background='linear-gradient(110deg,#352b24,#14372e)';kql.append(el('span','','Basal KQL-writing'),el('strong','','Gul/grøn · simple queries selvstændigt'));document.querySelector('#trainingResults').prepend(kql);
