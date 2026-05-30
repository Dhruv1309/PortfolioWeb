<script lang="ts">
  let {
    class: className = '',
    caption = 'Dhruv Vaswani'
  }: {
    class?: string;
    caption?: string;
  } = $props();
</script>

<figure class={`portrait-frame ${className}`}>
  <img src="/dhruv-portrait.png" alt={caption} loading="lazy" decoding="async" />
  <figcaption>{caption}</figcaption>
</figure>
