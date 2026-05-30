export const notes: NoteMeta[] = [
  {
    title: 'What makes people stop scrolling?',
    dek: 'A student note on pattern breaks, curiosity, and the tiny moment before someone decides to keep reading.',
    date: '2026-01-08',
    slug: 'what-makes-people-stop-scrolling',
    readingTime: '4 min read'
  },
  {
    title: 'Why storytelling fails on social media',
    dek: 'A thought I keep coming back to: maybe some brands are not boring, they are just not noticing enough.',
    date: '2026-01-15',
    slug: 'why-storytelling-fails-on-social-media',
    readingTime: '5 min read'
  },
  {
    title: 'Attention vs Engagement',
    dek: 'Trying to separate the moment someone pauses from the moment they actually care.',
    date: '2026-01-22',
    slug: 'attention-vs-engagement',
    readingTime: '3 min read'
  },
  {
    title: 'What I learned from analyzing 176 cafe posts',
    dek: 'Notes from the Piccolo Cafe project: repetition, rituals, and how a feed slowly teaches people what to expect.',
    date: '2026-02-03',
    slug: 'what-i-learned-from-analyzing-176-cafe-posts',
    readingTime: '6 min read'
  },
  {
    title: 'The psychology behind content resonance',
    dek: 'A working theory from observing content: people share what helps them recognize themselves.',
    date: '2026-02-14',
    slug: 'the-psychology-behind-content-resonance',
    readingTime: '4 min read'
  }
];

export function getNotes() {
  return notes;
}

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug);
}
