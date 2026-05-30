import { getNotes } from '$lib/notes';

export const prerender = true;

export function load() {
  return {
    notes: getNotes()
  };
}
