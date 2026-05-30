<script lang="ts">
  let {
    number,
    title
  }: {
    number: string;
    title: string;
  } = $props();
</script>

<div class="section-label">
  <span>{number}</span>
  <p>{title}</p>
</div>
