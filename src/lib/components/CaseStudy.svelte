<script lang="ts">
  import Reveal from './Reveal.svelte';

  let {
    study
  }: {
    study: {
      number: string;
      title: string;
      category: string;
      summary: string;
      metrics: string[];
      chapters: string[][];
    };
  } = $props();
</script>

<article class="case-study">
  <Reveal class="case-heading">
    <p class="case-number">{study.number}</p>
    <div>
      <p class="eyebrow">{study.category}</p>
      <h3>{study.title}</h3>
    </div>
  </Reveal>

  <Reveal class="case-summary" delay={0.08}>
    <p>{study.summary}</p>
  </Reveal>

  <Reveal class="metric-strip" delay={0.12}>
    {#each study.metrics as metric}
      <span>{metric}</span>
    {/each}
  </Reveal>

  <div class="case-chapters">
    {#each study.chapters as chapter, index}
      <Reveal class="case-chapter" delay={index * 0.02}>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h4>{chapter[0]}</h4>
        <p>{chapter[1]}</p>
      </Reveal>
    {/each}
  </div>
</article>
