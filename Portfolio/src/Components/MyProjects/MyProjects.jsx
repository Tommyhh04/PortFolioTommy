import "./Projects.css";
import MyProjects from "../MyProjects/ProjectsBase/ProjectsBase";
//Imports images to be used in project display thumbnail
import ProjectImg_Guitar from "../Images/ProjectImages/GuitarPiano.png";
import ProjectImg_PasswordGen from "../Images/ProjectImages/PasswordGen.png";
import ProjectImg_Pokedex from "../Images/ProjectImages/Pokedex.png";
import ProjectImg_PlanetWeight from "../Images/ProjectImages/PlanetWeight.png";
//Page that showcases some of my projects made through the bootcamp

//Note to self: Make prop based rather than hard coded

export default function Projects() {
  return (
    <div>
      <div className="MyProjects--container">
        <MyProjects
          title="Javascript Guitar player"
          img={ProjectImg_Guitar}
          desc="Playable guitar in browser"
        />
        <MyProjects
          title="Password Generator"
          img={ProjectImg_PasswordGen}
          alt="Thumbnail for project"
          desc="A password generator"
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
          desc="Working on learning to make links to other websites using props. Sorry for no link at the moment"
        />

        <MyProjects title="Coming soon" desc="Work in progress.." />
      </div>
    </div>
  );
}
