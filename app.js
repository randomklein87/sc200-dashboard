'use strict';
const d = window.SC200;
const fmt = n => new Intl.NumberFormat('da-DK',{maximumFractionDigits:1}).format(n);
const total = d.baselineHours + d.modules.reduce((n,m)=>n+m.hours,0);
const done = d.baselineHours + d.modules.reduce((n,m)=>n+m.completed,0);
const percent = Math.min(100,done/total*100);
document.querySelector('#percent').textContent = fmt(percent)+' %';
document.querySelector('#ring').style.setProperty('--progress',percent+'%');
document.querySelector('#done').textContent = fmt(done)+' t';
document.querySelector('#remaining').textContent = fmt(Math.max(0,total-done))+' t';
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
 const progress=el('progress');progress.max=m.hours;progress.value=m.completed;progress.setAttribute('aria-label',m.name+' progression');body.append(progress);
 row.append(body,el('strong','hours',fmt(m.completed)+' / '+fmt(m.hours)+' t'));document.querySelector('#modules').append(row);
});
d.baseline.forEach(s=>{const cell=el('div','skill '+s.tone);cell.append(el('span','',s.name),el('strong','',s.level));document.querySelector('#heatmap').append(cell);});
d.criteria.forEach(([title,body],i)=>{const item=el('article','criterion');item.append(el('span','criterion-number',String(i+1).padStart(2,'0')),el('h3','',title),el('p','muted',body),el('small','','Afventer vurdering'));document.querySelector('#criteria').append(item);});
