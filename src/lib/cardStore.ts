import { writable } from 'svelte/store';

export let visibleCard = writable<string | null>(null);
