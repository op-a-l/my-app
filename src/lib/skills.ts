// src/lib/data/skills.js
export const skillsTree = {
    name: "_opal",
    children: [
      {
        name: "Sound design",
        children: 
        [
          { name: "Synthèse sonore", 
            children: [
              {name: "FM"}
            ],
          },
          { name: "Digital sound processing", 
            children: [
              {name: "Max MSP"},
              {name: "Bitwig"},
            ],
          },
        ],
      },
      
      {
        name: "Analyse & Composition ",
        children: [
          { 
            name: "Electronique",
            url: "https://on.soundcloud.com/SKAU8Mg5fSCu6zCf8",
          },
          {
            name: "Baroque",
          },
          { 
            name: "Acoustique", 
            children: ["Musique concrète", "Rock progressif"] },
        ],
      },

      {
        name: "Programmation",
        children: 
        [
            { name: "Max MSP", 
              children: [
                {name: "Node for Max"},
                {name: "Externals js"}
              ]
            },
            { name: "web",
              children: [
                {name: "Sveltekit"},
                {name: "Wordpress"},
              ]
            },
        ],
      },
    ],
  };
