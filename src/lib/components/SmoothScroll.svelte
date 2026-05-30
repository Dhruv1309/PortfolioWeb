<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;
    let cancelled = false;

    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };

    void import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.08,
        easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
        smoothWheel: true
      });

      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  });
</script>
