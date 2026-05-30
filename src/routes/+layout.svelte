<script lang="ts">
  import '../styles/app.css';
  import SmoothScroll from '$lib/components/SmoothScroll.svelte';

  let { children } = $props();
</script>

<SmoothScroll />
{@render children()}
