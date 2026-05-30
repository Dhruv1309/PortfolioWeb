<script lang="ts">
  import { onMount } from 'svelte';

  let {
    children,
    class: className = '',
    delay = 0
  }: {
    children: import('svelte').Snippet;
    class?: string;
    delay?: number;
  } = $props();

  let node: HTMLElement;

  onMount(async () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.style.opacity = '1';
      node.style.transform = 'none';
      return;
    }

    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      node,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: node,
          start: 'top 86%',
          once: true
        }
      }
    );
  });
</script>

<div bind:this={node} class={className}>
  {@render children()}
</div>
