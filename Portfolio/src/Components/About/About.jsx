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
          Hei! Mitt navn er Tommy, jeg er en veldig glad og rolig person som
          elsker å lære. Jeg har nå brukt et halvt år hos Kodehode der jeg har
          lært frontend, HTML, CSS, JavaScript, figma og React. Dette har vært
          utrolig kjekt og spennende å lære og jobbe med!
        </p>
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
        <p>
          I min fritid liker jeg å spille videospill som krever rask tenking,
          adapterring og samarbeid, som World of Warcraft er et eksempel.
        </p>
        <p>
          Jeg liker også å fotografere, trening, gitar og lese bøker. Mye tid
          blir brukt på å forbedre eller prøve nye ting i livet. Jeg er veldig
          spent på å kunne fortsette med en fremtid innen frontend-utvikling og
          gleder meg masse til å lære mye mer.
        </p>
      </div>
    </div>
  );
}
