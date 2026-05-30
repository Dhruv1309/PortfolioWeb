import { error } from '@sveltejs/kit';
import { getNote, getNotes } from '$lib/notes';

export const prerender = true;

export function entries() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export function load({ params }) {
  const note = getNote(params.slug);

  if (!note) {
    error(404, 'Note not found');
  }

  return { note };
}
