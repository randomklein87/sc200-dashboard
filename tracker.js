// Den fælles, publicerede status. Opdater denne fil efter en undervisningssession.
window.SC200 = {
  updated: '2026-09-29',
  repository: 'https://github.com/randomklein87/sc200-dashboard',
  baselineHours: 1,
  next: 'Kompromitteret endpoint · investigation #1',
  modules: [
    {name:'Defender XDR + Defender for Endpoint', hours:4, completed:0, status:'Næste modul', description:'Overblik, incidents og response i XDR/MDE.'},
    {name:'Sentinel + KQL', hours:8, completed:0, status:'Planlagt', priority:true, description:'Sentinel og selvstændig query-skrivning.'},
    {name:'Endpoint Investigation', hours:4, completed:0, status:'Planlagt', description:'Beviser, procesforløb og endpoint-analyse.'},
    {name:'Threat Hunting', hours:3, completed:0, status:'Planlagt', description:'Fra hypotese til søgning og validering.'},
    {name:'Exam Mode', hours:4, completed:0, status:'Planlagt', description:'Scenarier, tidspres og målrettet repetition.'}
  ],
  baseline: [
    {name:'Incident response',level:'Stærk',tone:'strong'},
    {name:'Identity response',level:'Stærk',tone:'strong'},
    {name:'Defender XDR / MDE',level:'Mellem',tone:'medium'},
    {name:'KQL reading',level:'Mellem',tone:'medium'},
    {name:'Sentinel',level:'Lav',tone:'low'},
    {name:'KQL writing',level:'Lav',tone:'low'},
    {name:'Endpoint analysis',level:'Lav',tone:'low'},
    {name:'Threat hunting',level:'Lav / mellem',tone:'mixed'}
  ],
  criteria: [
    ['Undersøg & reagér','Gennemfør et XDR/MDE-scenarie og begrund containment, investigation og remediation.'],
    ['Skriv & forklar KQL','Skriv queries fra bunden, korrelér relevante data og forklar resultatet.'],
    ['Arbejd i Sentinel','Forklar og anvend analytics rules, automation rules og playbooks i et scenarie.'],
    ['Undersøg endpoints','Rekonstruér et hændelsesforløb og vælg relevante beviser og værktøjer.'],
    ['Hunt med en hypotese','Omsæt en hypotese til en søgning, validér fund og beskriv næste handling.'],
    ['Præstér under tidspres','Vis stabile resultater i tidsbegrænsede øvelser og forklar dine fejl uden hjælp.']
  ]
};
