import "./Projects.css";
//Imports the data to be used as props for the MyProjects
import projects from "./MyProjectsData";
//Imports the skeleton for the cards
import MyProjects from "../MyProjects/ProjectsBase/ProjectsBase";
//Imports images to be used in project display thumbnail
/*
import ProjectImg_Guitar from "../Images/ProjectImages/GuitarPiano.png";
import ProjectImg_PasswordGen from "../Images/ProjectImages/PasswordGen.png";
import ProjectImg_Pokedex from "../Images/ProjectImages/Pokedex.png";
import ProjectImg_PlanetWeight from "../Images/ProjectImages/PlanetWeight.png";
*/
//Page that showcases some of my projects made through the bootcamp

//Note to self: Make prop based rather than hard coded

export default function Projects() {
  const cards = projects.map((item) => {
    return (
      <MyProjects
        key={item.id}
        title={item.title}
        img={item.img}
        desc={item.desc}
        url={item.url}
      />
    );
  });
  console.log(projects);
  return (
    <div>
      <div className="MyProjects--container">
        {cards}

        {/*Old method used. Keep for now until images are working*/}
        {/*
        <MyProjects
          title="Javascript Guitar player"
          img={ProjectImg_Guitar}
          desc="Playable guitar in browser"
          url="https://tommyhh04.github.io/Guitar-PianoPlayer/"
        />
        <MyProjects
          title="Password Generator"
          img={ProjectImg_PasswordGen}
          alt="Thumbnail for project"
          desc="A password generator"
          url=""
        />
        <MyProjects
          title="Pokedex"
          img={ProjectImg_Pokedex}
          alt="THumbnail for project"
          desc="Pokedex with API and JavaScript"
        />
        <MyProjects
          title="What do i weigh on planet?"
          img={ProjectImg_PlanetWeight}
          alt="Thumbnail for project"
          desc="Check your weight at different planets"
        />
        <MyProjects
          title="Links"
          desc="Working on learning to make links to other websites using props. Links are in the Readme"
        />

  <MyProjects title="Coming soon" desc="Work in progress.." />*/}
      </div>
    </div>
  );
}
