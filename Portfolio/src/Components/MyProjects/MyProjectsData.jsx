import ProjectImg_Guitar from "../Images/ProjectImages/GuitarPiano.png";
import ProjectImg_PasswordGen from "../Images/ProjectImages/PasswordGen.png";
import ProjectImg_Pokedex from "../Images/ProjectImages/Pokedex.png";
import ProjectImg_PlanetWeight from "../Images/ProjectImages/PlanetWeight.png";
import ProjectImg_MemeGen from "../Images/ProjectImages/MemeGen.png";
//Contains data for the different projects to be displayed in MyProjects.jsx

const projects = [
  {
    id: 1,
    title: "Javascript Guitar player",
    img: ProjectImg_Guitar,
    desc: "Playable guitar in browser",
    url: "https://tommyhh04.github.io/Guitar-PianoPlayer/",
    complete: "Yes",
  },
  {
    id: 2,
    title: "Password Generator",
    img: ProjectImg_PasswordGen,
    alt: "Thumbnail for project",
    desc: "A password generator",
    url: "https://tommyhh04.github.io/PasswordGenerator/",
    complete: "Yes",
  },
  {
    id: 3,
    title: "Pokedex",
    img: ProjectImg_Pokedex,
    alt: "Thumbnail for project",
    desc: "Pokedex with API and JavaScript",
    url: "https://tommyhh04.github.io/PokeDex/",
    complete: "Yes",
  },
  {
    id: 4,
    title: "What do i weigh on planet?",
    img: ProjectImg_PlanetWeight,
    alt: "Thumbnail for project",
    desc: "Check your weight at different planets",
    url: "https://tommyhh04.github.io/PlanetWeight/",
    complete: "Yes",
  },

  {
    id: 5,
    title: "Meme Generator",
    img: ProjectImg_MemeGen,
    alt: "Thumbnail for project",
    desc: "Work in progress",
    url: "https://github.com/Tommyhh04/MemeGenerator",
    complete: "No",
  },
  {
    id: 6,
    title: "Work in progress..",
    img: {
      /*No image yet*/
    },
    alt: "Thumbnail for project",
    desc: "Prøver alltid å forbedre mine kode og design evner. Ta en titt innom av og til, kanskje jeg har gjort endringer eller et nytt spennende prosjekt er lagt til!",
  },
];

export default projects;
