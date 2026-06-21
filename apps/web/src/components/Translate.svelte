<script lang="ts">
  import { format } from "svelte-i18n"
  import isBrowser from "./../utils/isBrowser"

  export let key: string
</script>

<span data-tkey={key}>
  {#if isBrowser() === false && import.meta.env.WEBPACK_MODE === "development"}
    <slot />
  {:else}
    {@html (() => {
      const str = $format(key);
      // Log a warning to help contributors find missing translations
      if (typeof str === 'string' && (str === key || str.includes(key))) {
        console.warn(`Missing translation for key: ${key}`);
      }
      // Return escaped string - format should be safe
      return str;
    })()}
  {/if}
</span>
