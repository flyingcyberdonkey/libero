// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale, getLocaleFromNavigator } from 'svelte-i18n';
import type { LayoutLoad } from './$types';
import '@fortawesome/fontawesome-free/css/all.min.css'

export const load: LayoutLoad = async () => {
	if (browser) {
		// Priority: user-selected UI language (localStorage) -> navigator language -> already-initialized value
		try {
			const stored = localStorage.getItem('ui_language');
			if (stored) {
				locale.set(stored);
			} else {
				const nav = getLocaleFromNavigator();
				const normalized = String(nav).split('-')[0];
				if (normalized) locale.set(normalized);
			}
		} catch (err) {
			// If anything goes wrong, rely on the i18n init fallback
			console.warn('Could not set locale from storage or navigator', err);
		}
	}

	await waitLocale();
};
