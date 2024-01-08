import "./About.css";
//Imports profile images to be used in the page
import ProfileFull from "../Images/ProfileFull.jpg";

//Page containing text for the about section for the portfolio.

export default function About() {
  return (
    <div className="About--container">
      <div>
        <img className="About--profilepic" src={ProfileFull} />
      </div>
      <div className="About--text">
        <p>
          Jeg elsker å jobbe med frontend-utvikling og kurset gav meg mulighet
          til å oppnå drømmen om å få jobbe med dette. Jeg er veldig spent på å
          kunne fortsette med en fremtid innen frontend-utvikling og gleder meg
          masse til å lære mye mer.
        </p>
        {/*
    
        <p>
          Hobbyer så jeg liker å gjøre på fridtiden er fotografere, dataspill,
          trening, male. Mye tid blir brukt på å forbedre eller prøve nye ting i
          livet.
        </p>*/}
        <p>
          I min forrige jobb så jobbet jeg i butikk på Europris. Der fikk jeg
          jobbet mye i samarbeid med mine kollegaer og fikk brukt mine kreative,
          kommunikasjon og salgs evner til å gjøre min avdeling av butikken
          bedre.
        </p>
        <p>
          Jeg fikk også testet mine leder-evner som kveldsansvarlig for
          butikken. Jeg har også fagbrev i IKT-servicefag så jeg har erfaring
          med problemløsning med teknologi.
        </p>
      </div>
    </div>
  );
}
