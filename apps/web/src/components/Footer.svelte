<script lang="typescript">
	import Stack from './Stack.svelte';
	import Translate from './Translate.svelte';
	import Hidden from './Hidden.svelte';
	import LicenseLogo from './LicenseLogo.svelte';
</script>

<div class="main-footer">
	<Stack align="center" direction="column" spacing="s">
		<slot />
		<div class="footer-copy">
			<p>
				<strong>LibreLingoRelive</strong> is a fork from LibreLingoCommunity, which is a fork from
				<strong>LibreLingo</strong> by
				<a href="https://github.com/kantord">Dániel Kántor</a>
				and
				<a href="https://github.com/LibreLingo/LibreLingo#contributors">various contributors</a>.
			</p>
			<p>
				The source code is licensed under AGPL-3.0 and available on
				<a href="https://codeberg.org/LibreLingoRelive">Codeberg</a>.
			</p>
			<p>
				<a href="https://codeberg.org/LibreLingoRelive/LibreLingoRelive_Docs">
					<Translate key="index.development_docs_english_only">Development documentation (English only)</Translate>
				</a>
			</p>
</div>

<style>
	.main-footer {
		padding: 2rem 1.25rem;
		background: rgba(255, 255, 255, 0.92);
		border-top: 1px solid rgba(134, 77, 203, 0.12);
	}

	.footer-copy {
		display: grid;
		gap: 0.75rem;
		max-width: 740px;
		text-align: center;
		font-size: 0.95rem;
		color: #4b3c67;
	}

	.footer-copy p {
		margin: 0;
		line-height: 1.65;
	}

	.footer-copy a {
		color: var(--color-primary);
		text-decoration: underline;
	}

	.footer-copy a:hover {
		text-decoration: none;
	}
</style>
