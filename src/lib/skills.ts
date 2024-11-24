// src/lib/data/skills.js
export const skillsTree = {
    name: "_opal",
    children: [
      {
        name: "Sound design",
        children: [
          { name: "Synthèse sonore", children: ["FM"] },
          { name: "Digital sound processing", children: ["Max MSP", "Bitwig"] },
        ],
      },
      {
        name: "Analyse & Composition ",
        children: [
          { name: "Electronique", children: ["Electronique", "Baroque"] },
          { name: "Acoustique", children: ["Musique concrète", "Rock progressif"] },
        ],
      },
      {
        name: "Programmation",
        children: [
            { name: "Max MSP", children: ["Node for Max", "Externals js"]},
            { name: "web", children: ["Sveltekit", "WordPress"]},
        ],
      },

    ],
  };
  