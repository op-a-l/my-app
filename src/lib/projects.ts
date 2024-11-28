import type { link } from "fs";
import { AudioWaveform, Github, Podcast } from "lucide-svelte";
import type { SvelteComponent } from "svelte";

export interface Project {
    id: number,
    name: string,
    text: string,
    icone: SvelteComponent,
    subTitle?: string,
    link?: string,
    imageSrc?: string,
    imageAlt?: string,
}

export const projects = [
    {
        id: 0,
        name: "Max::workspace",
        text: "Max::workspace est un ensemble de patches Max open source accessibles gratuitement depuis github.",
        link: "https://github.com/op-a-l/Max-workspace", 
        icone: AudioWaveform
    },
    {
        id: 1,
        name: "Le fait du prince", 
        text: "Le Fait du Prince est une série audio écrite et réalisée par Solva et Alcaz du Catboat. Je travaille sur le nettoyage et le prémontage des rushes audio sur la première saison.",
        link: "https://www.youtube.com/@LeFaitduPrince",
        icone: Podcast
    },
    {
        id: 2,
        name: "Développement",
        text: "Je partage mon travail en développement sur github.",
        link: "https://github.com/op-a-l",
        icone: Github
    }
]