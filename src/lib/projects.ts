import type { link } from 'fs';
import { AudioWaveform, Github, Podcast, TreeDeciduous } from 'lucide-svelte';
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
		id: 'max-workspace',
		name: 'Max::workspace',
		text: 'Max::workspace est un ensemble de patches Max open source accessibles gratuitement depuis github. Le dépôt github "Max-workspace" contient des modules Max, des scripts js et node.js et des applications développées à partir de ces modules. Le dépôt est sous licence creative commons, les détails pour utiliser mes outils sont disponibles sur le README.md depuis github.',
		link: 'https://github.com/op-a-l/Max-workspace',
		icone: AudioWaveform,
		imageSrc: '/maxImage.png',
		imageAlt: "capture d'écran de deux outils développés à partir de mes modules Max"
	},
	{
		id: 'le-fait-du-prince',
		name: 'Le fait du prince',
		text: 'Le Fait du Prince est une série audio écrite et réalisée par Solva et Alcaz du Catboat. Je travaille sur le nettoyage et le prémontage des rushes audio sur la première saison.',
		link: 'https://www.youtube.com/@LeFaitduPrince',
		icone: Podcast
	},
	{
		id: 'developpement',
		name: 'this.website',
		subtitle: 'opal-sounds.com',
		text: "Je développe et maintiens ce site web. J'apprend le développement web et j'utilise mon portfolio web comme le lieu de toutes mes expérimentations en termes de conception d'interface utilisateur et de design. Je ne suis certainement pas le développeur le plus performant mais j'éprouve un grand plaisir à développer mon site et mon workflow de programmation.",
		link: 'https://github.com/op-a-l/my-app',
		icone: Github
	},
	{
		id: 'organic-music',
		name: 'organic-music',
		text: 'organic-music est un projet musical regroupant plusieurs musiques dans une esthétique organique.',
		icone: TreeDeciduous
	}
];
