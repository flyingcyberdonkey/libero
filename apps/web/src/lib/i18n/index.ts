import { browser } from '$app/environment';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

const defaultLocale = 'en';

// Register available locales (lazy-loaded JSON)
register('en', () => import('./translation/en.json'));
register('es', () => import('./translation/es.json'));
register('fr', () => import('./translation/fr.json'));
register('de', () => import('./translation/de.json'));
register('it', () => import('./translation/it.json'));
register('eo', () => import('./translation/eo.json'));
register('pl', () => import('./translation/pl.json'));

// Choose an initial locale sensibly:
// 1) If in browser, use stored UI language if present
// 2) Otherwise use navigator language (normalized to primary tag)
// 3) Fallback to defaultLocale
let initialLocale = defaultLocale;
if (browser) {
	try {
		const stored = localStorage.getItem('ui_language');
		if (stored) {
			initialLocale = stored;
		} else {
			// getLocaleFromNavigator may return 'es-ES' etc. Normalize to primary tag.
			const nav = getLocaleFromNavigator();
			initialLocale = String(nav).split('-')[0] || defaultLocale;
		}
	} catch (err) {
		initialLocale = defaultLocale;
	}
}

init({
	fallbackLocale: defaultLocale,
	initialLocale
});
