<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LinkOrButton from './primitives/LinkOrButton.svelte';
	import Spinner from './Spinner.svelte';
	import Stack from './Stack.svelte';

	const dispatch = createEventDispatcher();
	export let href: string | null = null;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let loading = false;
	export let asHref: string | null = null;
	export let type: 'button' | 'submit' = 'button';
	export let fakePseudoSelector: null | 'active' | 'hover' = null;
	// TODO: fix secondary button style needs to have purple outline
	export let style: 'primary' | 'secondary' | 'accent' | 'key' | 'linkButton' = 'primary';
	export let target: string | undefined = undefined;
	export let tabIndex: number | undefined = undefined;
	export let ariaLabel: string | null = null;
	export let disabled = false;
</script>

<LinkOrButton
	ref="lluis-button"
	data-size={size}
	data-style={style}
	data-selector={fakePseudoSelector}
	{href}
	on:click={() => dispatch('click')}
	label={ariaLabel}
	{type}
	{target}
	{tabIndex}
	{disabled}
>
	{#if loading}
		<Spinner />
	{:else}
		<Stack>
			<div slot="icon-left"></div>
			<slot />
		</Stack>
	{/if}
</LinkOrButton>

{#if asHref != null}
	<a class="hidden-link" aria-label="hidden-link" href={asHref}>&nbsp;</a>
{/if}

<style>
	:global([ref='lluis-button']) {
		font-size: var(--font-size-normal);
		line-height: 1.4;
		font-weight: 600;
		gap: 0.6rem;
		align-items: center;
		display: inline-flex;
		justify-content: center;
		border-radius: 12px;
		padding: 0 1.25rem;
		height: 44px;
		min-width: 0;
		border: 1px solid transparent;
		white-space: nowrap;
		cursor: pointer;
		transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, color 0.2s ease;
	}

	/* Sizes */
	:global([ref='lluis-button'][data-style='accent'][data-size='medium']) {
		font-size: var(--font-size-large);
		line-height: calc(var(--font-size-large) * 1.5);
	}

	:global([ref='lluis-button'][data-style='accent'][data-size='large']) {
		font-size: var(--font-size-xlarge);
		line-height: calc(var(--font-size-xlarge) * 1.5);
	}

	:global([ref='lluis-button'][data-style='accent']) {
		background-color: var(--button-color-accent);
		border-color: var(--button-border-color-accent);
		color: var(--text-color-default);
	}

	:global([ref='lluis-button'][data-style='primary']) {
		background-color: var(--button-color-primary);
		border-color: var(--button-border-color-primary);
		color: var(--text-color-inverted);
	}

	:global([ref='lluis-button'][data-style='primary']:hover) {
		background-color: var(--button-color-primary-hover, rgba(134, 77, 203, 0.93));
	}

	:global([ref='lluis-button'][data-style='secondary']) {
		background-color: var(--button-color-secondary);
		border-color: var(--button-border-color-secondary);
		color: var(--button-color-secondary-text, var(--text-color-default));
	}

	:global([ref='lluis-button'][data-style='secondary']:hover) {
		background-color: rgba(134, 77, 203, 0.14);
	}

	:global([ref='lluis-button'][data-style='linkButton']) {
		background-color: transparent;
		border-color: transparent;
		color: var(--button-color-link-text, var(--button-color-primary));
		text-decoration: underline;
	}

	:global([ref='lluis-button'][data-style='linkButton']:hover) {
		background-color: rgba(134, 77, 203, 0.08);
	}

	:global([ref='lluis-button']:hover) {
		transform: translateY(-1px);
	}

	:global([ref='lluis-button'][data-style='secondary']) {
		background-color: var(--button-color-secondary);
		border-color: var(--button-border-color-secondary);
		color: var(--button-color-secondary-text, var(--text-color-default));
	}

	:global([ref='lluis-button'][data-style='secondary']:hover) {
		background-color: rgba(134, 77, 203, 0.14);
	}

	:global([ref='lluis-button'][data-style='linkButton']) {
		background-color: var(--button-color-link);
		border-color: transparent;
		color: var(--button-color-link-text, var(--button-color-primary));
	}
</style>
