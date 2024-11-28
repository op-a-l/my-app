import { writable } from 'svelte/store';

export let visibleCard = writable<number | null>(0);
