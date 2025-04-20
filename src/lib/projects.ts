import type { link } from 'fs';
import { AudioWaveform, Github, Podcast, TreeDeciduous, Speaker } from 'lucide-svelte';
import type { SvelteComponent } from 'svelte';

export const getProjectById = (id: string) => {
	return projects.find((project) => project.id === id);
};

export interface Project {
	id: string;
	name: string;
	text: string;
	icone: SvelteComponent;
	subTitle?: string;
	link?: string;
	imageSrc?: string;
	imageAlt?: string;
}

export const projects = [
	{
		id: 'soundcloud',
		name: 'Composition',
		text: 'Part of my work involves arranging the sounds I create into musical compositions. I usually design all the elements in my music from recordings and the basic synthesis tools available in Bitwig.',
		icone: Speaker,
		link: 'https://soundcloud.com/tournesol-840734247/tracks',
		imageSrc: '/musiqueImage.png',
		imageAlt: 'view of a spectrogram visually representing sound.'
	},
	{
		id: 'max-workspace',
		name: 'Max::workspace',
		text: 'Max::workspace is a collection of open-source Max patches available for free on GitHub. The "Max-workspace" repository includes Max modules, JavaScript and Node.js scripts, and apps built from those modules. It’s released under a Creative Commons license — usage details are available in the README.md on GitHub.',
		link: 'https://github.com/op-a-l/Max-workspace',
		icone: AudioWaveform,
		imageSrc: '/maxImage.png',
		imageAlt: "screenshot of two tools built with my Max modules"
	},
	{
		id: 'le-fait-du-prince',
		name: 'Le fait du prince',
		text: 'Le Fait du Prince is an audio series written and directed by Solva and Alcaz from Catboat. I worked on cleaning and pre-editing the audio rushes for the first season.',
		link: 'https://www.youtube.com/@LeFaitduPrince',
		icone: Podcast
	},
	{
		id: 'developpement',
		name: 'this.website',
		subTitle: 'opal-sounds.com',
		text: "I design and maintain this website. I’m learning web development and use my portfolio as a playground for experimenting with UI and design concepts. I’m not the most efficient developer, but I love crafting my site and refining my creative workflow through code.",
		link: 'https://github.com/op-a-l/my-app',
		icone: Github
	}
];
