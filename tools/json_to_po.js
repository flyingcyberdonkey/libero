#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const translationsDir = path.join(__dirname, '..', 'apps', 'web', 'src', 'lib', 'i18n', 'translation');
const outLocaleDir = path.join(__dirname, '..', 'locale');

function toPo(lang, obj) {
  const lines = [];
  lines.push(`# Translations for ${lang}`);
  lines.push('');
  Object.keys(obj).forEach((k) => {
    const v = obj[k];
    lines.push(`#: ${k}`);
    lines.push(`msgid "${k.replace(/"/g, '\\"')}"`);
    lines.push(`msgstr "${String(v).replace(/"/g, '\\"')}"`);
    lines.push('');
  });
  return lines.join('\n');
}

if (!fs.existsSync(translationsDir)) {
  console.error('Translations directory not found:', translationsDir);
  process.exit(1);
}

fs.readdirSync(translationsDir).forEach((file) => {
  if (!file.endsWith('.json')) return;
  const lang = path.basename(file, '.json');
  const json = JSON.parse(fs.readFileSync(path.join(translationsDir, file), 'utf8'));
  const po = toPo(lang, json);
  const outDir = path.join(outLocaleDir, lang, 'LC_MESSAGES');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'messages.po'), po, 'utf8');
  console.log('Wrote', path.join(outDir, 'messages.po'));
});

console.log('Done.');
