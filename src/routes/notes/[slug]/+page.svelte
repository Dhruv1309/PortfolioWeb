<script lang="ts">
  import { page } from '$app/state';

  let { data } = $props();

  const modules = import.meta.glob<{ default: import('svelte').Component }>('/src/content/notes/*.svx', {
    eager: true
  });
  const key = `/src/content/notes/${page.params.slug}.svx`;
  const Post = modules[key]?.default;
</script>

<svelte:head>
  <title>{data.note.title} - Dhruv Vaswani</title>
  <meta name="description" content={data.note.dek} />
  <link rel="canonical" href={`https://itsdhruvswork.netlify.app/notes/${data.note.slug}`} />
</svelte:head>

<main class="note-page">
  <a class="back-link" href="/#notes">Back to notes</a>
  <header class="note-hero">
    <p class="eyebrow">Notes & Thinking</p>
    <h1>{data.note.title}</h1>
    <p>{data.note.dek}</p>
    <time datetime={data.note.date}>{data.note.readingTime}</time>
  </header>

  {#if Post}
    <Post />
  {/if}
</main>
