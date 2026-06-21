**Translation workflow & Weblate migration**

Overview
- Current translations live as JSON in `apps/web/src/lib/i18n/translation/*.json`.
- For Weblate/Gettext it's recommended to use PO files under `locale/{lang}/LC_MESSAGES/messages.po`.

Goals
- Ensure all UI strings are externalized (no hardcoded English in components).
- Provide tooling to convert existing JSON translation files to PO files for Weblate.
- Add translator context where useful.

Quick steps to migrate
1. Run the provided conversion script to create PO files from the JSON translations:

```bash
node tools/json_to_po.js
```

2. Verify `locale/{lang}/LC_MESSAGES/messages.po` files and push to repo. Connect the repository to Weblate and point the component to `locale/` path.

3. When new UI strings are added, update the JSON files and re-run the converter, or edit PO files directly in Weblate.

Notes for developers
- Use the `Translate` component or `$_('key')` for all UI text. Avoid raw English text in components.
- Add context lines for translators by adding comments in PO (the converter includes basic context from keys).
