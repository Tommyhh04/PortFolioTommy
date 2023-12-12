import "./Projects.css";
import MyProjects from "../MyProjects/ProjectsBase/ProjectsBase";

//Page that showcases some of my projects made through the bootcamp

//Note to self: Make prop based rather than hard coded

export default function Projects() {
  return (
    <div>
      <div className="MyProjects--container">
        <MyProjects
          title="Javascript Guitar player"
          img="../Images/ProjectImages/GuitarPiano.png"
          desc="Playable guitar in browser"
        />
        <MyProjects
          title="Password Generator"
          img="../Images/ProjectImages/PasswordGen.png"
          alt="Thumbnail for project"
          desc="A password generator"
        />
        <MyProjects
          title="Pokedex"
          img="../Images/ProjectImages/Pokedex.png"
          alt="THumbnail for project"
          desc="Pokedex with API and JavaScript"
        />

        <MyProjects
          title="Coming soon"
          desc="Images still missing. Fixing as soon as I can"
        />
      </div>
    </div>
  );
}
