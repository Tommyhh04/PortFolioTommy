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
        <h3>En Junior frontend utvikler</h3>
        <p>
          Mitt navn er Tommy, og for tiden går jeg på kurset Kodehode for å bli
          en frontend-utvikler. Det har vært utroligt kjekt å jobbe og lære så
          mye om frontend og ser for meg en stor fremtid innen dette yrket.
        </p>
        <p>
          Gjennom kurset har jeg fått erfaring i HTML, CSS, JavaScript og React,
          og jeg trives best med å jobbe med React og CSS.
        </p>
        <p>
          Jeg er ikke redd for å prøve eller eksperimentere med nye ideer.
          Design og kunst er også av interesse for meg som jeg prøver å bruke i
          mitt arbeid.
        </p>
        <p>
          Jeg har masse å lære enda, så jeg er veldig motivert for å stå på!
        </p>
      </div>
      {/*Contains the profile image*/}
      <div>
        {/*Profile image of me*/}
        <img className="Header--profilepic" src={ProfileHead}></img>
      </div>
    </div>
  );
}
