<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import CaseStudy from '$lib/components/CaseStudy.svelte';
  import Portrait from '$lib/components/Portrait.svelte';
  import Reveal from '$lib/components/Reveal.svelte';
  import SectionLabel from '$lib/components/SectionLabel.svelte';
  import { caseStudies } from '$lib/content';

  let { data } = $props();
</script>

<svelte:head>
  <title>Dhruv Vaswani - Student Exploring Brands, Content & Attention</title>
  <meta
    name="description"
    content="Dhruv Vaswani is a second year CSE AI/ML student at PCCOE Pune exploring brands, content strategy, and why people pay attention."
  />
  <meta property="og:title" content="Dhruv Vaswani - Student Exploring Brands & Attention" />
  <meta
    property="og:description"
    content="Early work, honest notes, and real projects around content, brands, and understanding people."
  />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://itsdhruvswork.netlify.app/" />
</svelte:head>

<div class="site-shell">
  <header class="masthead" transition:fade={{ duration: 500 }}>
    <a class="wordmark" href="#top" aria-label="Dhruv Vaswani">
      <span>Dhruv Vaswani</span>
      <small>CSE AI/ML student - PCCOE Pune</small>
    </a>
    <a class="mail-link" href="mailto:dhruvvaswani13@gmail.com">Contact</a>
  </header>

  <main id="top">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="kicker" transition:fly={{ y: 12, duration: 700 }}>Second year CSE AI/ML student - Pune</p>
          <h1 id="hero-title" transition:fly={{ y: 18, duration: 800 }}>
            Dhruv<br />Vaswani
          </h1>
          <div class="hero-title-block" transition:fly={{ y: 16, duration: 850, delay: 120 }}>
            <p>Learning how brands earn attention.</p>
          </div>
        </div>

        <div class="hero-portrait" transition:fly={{ y: 22, duration: 900, delay: 160 }}>
          <Portrait caption="Dhruv Vaswani - portrait asset" />
        </div>

        <div class="hero-lines" transition:fly={{ y: 18, duration: 900, delay: 220 }}>
          <p>I am still early, but I notice patterns in how people react to brands, posts, and stories.</p>
          <p>I like turning those observations into decks, scripts, experiments, and notes.</p>
          <p>I am looking for real projects, internships, and people who are willing to let me learn by doing.</p>
        </div>
      </div>
    </section>

    <section id="introduction" class="chapter introduction">
      <SectionLabel number="01" title="Introduction" />
      <Reveal class="intro-layout">
        <p class="lede">
          I keep finding myself asking why one post makes people stop, while another one disappears without a trace.
        </p>
        <div class="intro-text">
          <p>
            I am a second year engineering student, but a lot of my curiosity lives around brands, content, and people. I like looking at captions, comments, reels, communities, and small details that explain why something feels interesting.
          </p>
          <p>
            I am not claiming to have all the answers. I am learning by studying real examples, making strategy documents, testing ideas online, and paying attention to what people actually respond to.
          </p>
        </div>
      </Reveal>
    </section>

    <section class="quote-band" aria-label="Strategic point of view">
      <Reveal>
        <p>
          I think the useful clues are usually hiding in the details people scroll past.
        </p>
      </Reveal>
    </section>

    <section id="selected-work" class="chapter selected-work">
      <SectionLabel number="02" title="Selected Work" />
      <div class="work-intro">
        <Reveal>
          <h2>Projects as field notes.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            These are not polished portfolio case studies. They are honest records of projects where I tried to observe carefully, make something useful, and learn from the result.
          </p>
        </Reveal>
      </div>

      <div class="case-list">
        {#each caseStudies as study}
          <CaseStudy {study} />
        {/each}
      </div>
    </section>

    <section class="image-transition" aria-label="Portrait transition">
      <Reveal class="transition-grid">
        <Portrait caption="Dhruv Vaswani - editorial portrait" />
        <p>
          I am trying to get better at spotting the small human reason behind why something gets noticed.
        </p>
      </Reveal>
    </section>

    <section id="notes" class="chapter notes-section">
      <SectionLabel number="03" title="Notes & Thinking" />
      <Reveal class="notes-heading">
        <h2>A learning notebook.</h2>
        <p>
          Short notes on attention, content, brand behavior, and the questions I am still working through.
        </p>
      </Reveal>

      <div class="notes-list">
        {#each data.notes ?? [] as note, index}
          <Reveal class="note-row" delay={index * 0.03}>
            <a href={`/notes/${note.slug}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.dek}</p>
              </div>
              <time datetime={note.date}>{note.readingTime}</time>
            </a>
          </Reveal>
        {/each}
      </div>
    </section>

    <section id="about" class="chapter about-section">
      <SectionLabel number="04" title="About" />
      <div class="about-grid">
        <Reveal class="about-copy">
          <h2>
            Not a professional yet.<br />
            Just very curious.
          </h2>
          <p class="about-declaration">I am slowly discovering that I am good at noticing how people connect with ideas.</p>
          <p>
            I study CSE AI/ML at PCCOE Pune. Engineering has taught me how to break problems down, but the questions that pull me in are often more human: why does a brand feel warm, why does a caption feel honest, why does one idea travel while another one sits still?
          </p>
          <p>
            I am early in the journey. I am building projects, writing notes, learning from feedback, and trying to develop better taste through real work instead of just theory.
          </p>
        </Reveal>
        <Reveal class="about-image" delay={0.12}>
          <Portrait caption="Dhruv Vaswani - about portrait" />
        </Reveal>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <SectionLabel number="05" title="Contact" />
      <Reveal class="contact-grid">
        <div>
          <h2>If you are building something with content, brands, or people in mind, I would love to learn from it.</h2>
        </div>
        <address>
          <a href="mailto:dhruvvaswani13@gmail.com">dhruvvaswani13@gmail.com</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://itsdhruvswork.netlify.app/" target="_blank" rel="noreferrer">itsdhruvswork.netlify.app</a>
        </address>
      </Reveal>
      <footer>
        <p>Dhruv Vaswani</p>
        <a href="mailto:dhruvvaswani13@gmail.com">dhruvvaswani13@gmail.com</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    </section>
  </main>
</div>
