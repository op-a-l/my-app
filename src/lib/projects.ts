import { AudioWaveform, Github, Podcast } from "lucide-svelte";

export const projects = [
    {
        id: 0,
        name: "Max::workspace",
        inLink: "./MaxWorkspace.svelte",
        outLink: "https://github.com/op-a-l/Max-workspace", 
        text: "Max::workspace est un ensemble de patches Max open source accessibles gratuitement depuis github.",
        icone: AudioWaveform
    },
    {
        id: 1,
        name: "Le fait du prince", 
        inLink: "./FDP.svelte",
        outLink: "https://www.youtube.com/@LeFaitduPrince",
        text: "Le Fait du Prince est une série audio écrite et réalisée par Solva et Alcaz du Catboat. Je travaille sur le nettoyage et le prémontage des rushes audio sur la première saison.",
        icone: Podcast
    },
    {
        id: 2,
        name: "Développement",
        outLink: "https://github.com/op-a-l",
        text: "Je partage mon travail en développement sur github.",
        icone: Github
    }
]