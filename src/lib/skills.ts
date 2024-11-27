// src/lib/data/skills.js
export const skillsTree = {
    name: "_opal",
    children: [
      {
        name: "Composition",
        children: 
        [
          { name: "transients - single", 
            url: "https://on.soundcloud.com/23L2dqUf39AYWr327",
          },
        ],
      },
      
      {
        name: "Techniques sonores",
        children: [
          { 
            name: "Le fait du prince",
            url: "https://www.youtube.com/@LeFaitduPrince",
            desc: "Nettoyage et prémontage sur les épisodes 2, 3 & 4"
          },
        ],
      },

      {
        name: "Programmation",
        children: 
        [
            { name: "Max::workspace", 
              url: "https://github.com/op-a-l/Max-workspace",
              desc: "Dépôt github regroupant des outils de musique open source pour Max 8 et 9"
            },
            { name: "Web",
              children: 
              [
                { 
                  name: "opal-sounds.com",
                  desc: "J'ai codé ce site avec Sveltekit"
                },
              ]
            },
        ],
      },
    ],
  };
