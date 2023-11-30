import "./Projects.css";

//Imports images to be used as thumbnails for each project
import PasswordGen from "../Images/ProjectImages/PasswordGen.png";
import GuitarPiano from "../Images/ProjectImages/GuitarPiano.png";
import Pokedex from "../Images/ProjectImages/Pokedex.png";

//Page that showcases some of my projects made through the bootcamp

//Note to self: Make prop based rather than hard coded

export default function Projects() {
  return (
    <div>
      <div className="MyProjects--container">
        <div>
          <h2>Noen av prosjektene lagd under Kodehode</h2>
        </div>
        <div className="MyProjects--ProjectBox">
          <a
            href="https://effervescent-biscotti-edfac2.netlify.app/"
            target="blank"
          >
            <img
              className="MyProjects--thumbnail"
              alt="Thumbnail of a password generator project"
              src={PasswordGen}
            />
          </a>
          <p>Password Generator</p>
        </div>
        <div className="MyProjects--ProjectBox">
          <a
            href="https://tommyhh04.github.io/Guitar-PianoPlayer/"
            target="blank"
          >
            <img
              className="MyProjects--thumbnail"
              alt="Thumbnail of a guitar player project"
              src={GuitarPiano}
            />
          </a>
          <p>Guitar player and piano player</p>
        </div>
        <div className="MyProjects--ProjectBox">
          <a href="https://tommyhh04.github.io/PokeDex/" target="blank">
            <img
              className="MyProjects--thumbnail"
              alt="thumbnail of a pokedex project"
              src={Pokedex}
            />
          </a>
          <p>PokeDex</p>
        </div>
      </div>
    </div>
  );
}
