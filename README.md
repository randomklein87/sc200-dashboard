# Martins SC-200 dashboard

Statisk, responsivt dashboard til Martins SC-200-forløb. Ingen installation, eksterne biblioteker, login eller tracking på siden.

## Status og vedligeholdelse

`tracker.js` er den fælles publicerede status. Opdater `updated`, modulernes `completed` og `status`, `next` og kompetencer efter en session. Commit ændringen for at genpublicere via GitHub Pages. Siden læser ikke automatisk undervisningschatten, og besøgende kan ikke ændre den fælles status.

Startstatus: 1 time baseline gennemført, 23 timer planlagt i fem moduler, cirka 24 timer i alt. Progressionen måler tidsforbrug, ikke eksamensparathed. Exam-readiness-kriterier er foreslåede læringsmål og afventer vurdering.

Undervisningsspor: https://chatgpt.com/c/6aba2855-819c-83eb-a746-93e9981b7f41

## GitHub Pages

Settings → Pages → Deploy from a branch → main → /(root) → Save.

Alle fem sidefiler (`index.html`, `style.css`, `tracker.js`, `app.js`, `.nojekyll`) skal ligge i repoets rod. Opdater repository-feltet i tracker.js, hvis repoets navn ændres.
