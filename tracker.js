// Den fælles, publicerede status. Opdater denne fil efter en undervisningssession.
window.SC200 = {
  updated: '2026-10-04',
  repository: 'https://github.com/randomklein87/sc200-dashboard',
  baselineHours: 1,
  next: 'Module 2 · Microsoft Sentinel + KQL',
  modules: [
    {name:'Defender XDR + Defender for Endpoint', hours:4, completed:2, progressRange:[100,100], status:'Grundmodul gennemført · 100 %', description:'Grundmodul bestået. Defender repeteres fortsat i mixed cases.'},
    {name:'Sentinel + KQL', hours:8, completed:0, status:'Næste modul', priority:true, description:'Sentinel og selvstændig query-skrivning.'},
    {name:'Endpoint Investigation', hours:4, completed:0, status:'Planlagt', description:'Beviser, procesforløb og endpoint-analyse.'},
    {name:'Threat Hunting', hours:3, completed:0, status:'Planlagt', description:'Fra hypotese til søgning og validering.'},
    {name:'Exam Mode', hours:4, completed:0, status:'Planlagt', description:'Scenarier, tidspres og målrettet repetition.'}
  ],
  learned: ['Device Timeline', 'Advanced Hunting', 'Live Response', 'AIR', 'Investigation Package', 'Incident/Alert/Evidence-modellen'],
  training: ['Mere avanceret KQL', 'Dybere endpoint/process-analyse', 'Microsofts best/first/next-spørgsmål', 'Defender-repetition i mixed cases'],
  sessions: [{date:'2026-10-01',hours:1,module:1},{date:'2026-10-04',hours:1,module:1}],
  results: ['Sikkert valg mellem Device Timeline, Advanced Hunting, Live Response, AIR og Investigation Package.', 'Analyserer process trees og identificerer suspicious parent/child relationships.', 'Forstår LOLBins og har arbejdet med rundll32.exe, regsvr32.exe og sc.exe.', 'Identificerer discovery, persistence, credential access, C2 og lateral movement i en attack chain.', 'Containment: evidence → scope → proportional containment; skelner mellem endpoint- og identity-containment.', 'Skriver simple KQL-queries fra blankt papir med where, project, order by, in, summarize, count() og by.', 'Bestod afsluttende mixed Defender XDR-case med korrekt containment, Advanced Hunting og Live Response.'],
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
