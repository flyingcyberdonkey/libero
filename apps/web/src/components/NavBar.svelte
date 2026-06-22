<script lang="ts">
  import { page } from '$app/state';
  import Logo from 'components/Logo.svelte';
  import LinkOrButton from 'components/primitives/LinkOrButton.svelte';

  export let hasAuth = false;
  export let repositoryURL: string | null = null;

  const courseName = page.params?.courseName || '';
  const homepageLink = `/course/${courseName}`;
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="navbar__left">
    <Logo src="/images/logo.svg" alt="LibreLingo" link={homepageLink} />
  </div>

  <div class="navbar__middle" />

  <div class="navbar__right">
    {#if repositoryURL}
      <LinkOrButton href={repositoryURL} target="_blank">Course Feedback</LinkOrButton>
    {/if}
    <LinkOrButton href="/imprint">Imprint</LinkOrButton>
    <LinkOrButton href="/privacy">Privacy</LinkOrButton>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: var(--navbar-height);
    padding: var(--spacing-s) var(--spacing-m);
    background: var(--new-navbar-background);
    color: #3c2f5d;
    border-bottom: 1px solid rgba(134, 77, 203, 0.12);
    backdrop-filter: blur(12px);
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .navbar__middle {
    flex: 1;
  }

  .navbar__right {
    display: flex;
    gap: var(--spacing-s);
    align-items: center;
  }

  .navbar__left,
  .navbar__right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .navbar__right :global(a) {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-primary);
    background: rgba(134, 77, 203, 0.08);
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    border: 1px solid rgba(134, 77, 203, 0.16);
    text-decoration: none;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .navbar__right :global(a):hover {
    background: rgba(134, 77, 203, 0.14);
    transform: translateY(-1px);
  }
</style>
