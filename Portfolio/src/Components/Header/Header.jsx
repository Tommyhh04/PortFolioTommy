//Creates the first page seen when opening the webpage
//Presents some information and a image of me (Tommy)
import "./Header.css";
//Imports a profile image of me to be used on the page
import ProfileHead from "../Images/ProfileHead.jpg";

//Maybe make a navigation menu ..

//Start of the front page
export default function Header() {
  return (
    <div className="Header--Container">
      {/*Contains the text*/}
      <div className="Header--person">
        <h3>Hei! Jeg heter</h3>
        <h1>Tommy Halleland</h1>
        <h3>En frontend utvikler</h3>
      </div>
    </div>
  );
}
