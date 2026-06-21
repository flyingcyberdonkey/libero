export function getUiLanguage(): string | null {
  try {
    return localStorage.getItem('ui_language');
  } catch (err) {
    return null;
  }
}

export function setUiLanguage(lang: string) {
  try {
    localStorage.setItem('ui_language', lang);
    // Set the svelte-i18n locale if available
    try {
      // dynamic import to avoid SSR issues
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { locale } = require('svelte-i18n');
      locale.set(lang);
    } catch (e) {
      // ignore if not available in this context
    }
  } catch (err) {
    console.warn('Could not persist ui language', err);
  }
}

export function clearUiLanguage() {
  try {
    localStorage.removeItem('ui_language');
  } catch (err) {
    // ignore
  }
}

export default { getUiLanguage, setUiLanguage, clearUiLanguage };
