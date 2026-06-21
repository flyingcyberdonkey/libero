This file lists UI strings found in the codebase that are still hardcoded and should be externalized into the translation files.

Found examples (non-exhaustive)
- "Lesson completed!" (apps/web/src/components/FanfareScreen.svelte)
- "You've completed" (apps/web/src/components/FanfareScreen.svelte)
- "Course Feedback" (apps/web/src/components/NavBar.svelte) — consider using translation key `nav.course_feedback`
- "Imprint" (apps/web/src/components/NavBar.svelte)
- "Privacy" (apps/web/src/components/NavBar.svelte)
- "Start learning German" / other hardcoded course start buttons (apps/web/src/routes/+page.svelte)
- "Can't listen now" (apps/web/src/components/challenges/ChallengePanel.svelte)
- H1 titles in imprint/privacy pages (apps/web/src/routes/imprint/+page.svelte, apps/web/src/routes/privacy/+page.svelte)
- Error messages loaded as content fallbacks in imprint/privacy routes (e.g. "Error: Imprint was not loaded.")

Recommended next steps
1. Replace each hardcoded string with the `Translate` component or `$_('key')` and add the key/value to `apps/web/src/lib/i18n/translation/*.json`.
2. Re-run `node tools/json_to_po.js` to generate PO files and push to the repo.
3. Optionally open a Weblate project and import the `locale/` folder.
