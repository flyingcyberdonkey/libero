const path = require('path');
const fs = require('fs');

const translationsDir = path.join(__dirname, '..', 'apps', 'web', 'src', 'lib', 'i18n', 'translation');
function load(lang) {
  try {
    const file = path.join(translationsDir, `${lang}.json`);
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    return null;
  }
}

function getTranslation(key, uiLang, courseLang) {
  const ui = load(uiLang);
  if (ui && ui[key]) return { lang: uiLang, value: ui[key] };
  const course = load(courseLang);
  if (course && course[key]) return { lang: courseLang, value: course[key] };
  const en = load('en');
  if (en && en[key]) return { lang: 'en', value: en[key] };
  return null;
}

const sampleKeys = ['course_page.button_learn', 'index.meta.description', 'meta.title'];
const tests = [
  { ui: 'es', course: 'de' },
  { ui: 'de', course: 'es' },
  { ui: 'fr', course: 'es' }
];

tests.forEach(({ ui, course }) => {
  console.log(`\nTesting UI=${ui}, course=${course}`);
  sampleKeys.forEach((k) => {
    const res = getTranslation(k, ui, course);
    if (res) {
      console.log(`  ${k} -> [${res.lang}] ${res.value}`);
    } else {
      console.warn(`  ${k} -> MISSING in ui=${ui}, course=${course}, en fallback`);
    }
  });
});
