import "./Contact.css";
import githubLogo from "../Images/Logo/GithubLogo.png";

//Provides contact information and links to github and LinkedIn profile

export default function Contact() {
  return (
    <div className="Contact--container">
      <h4>
        <img className="Logo" />
        <a href="mailto:tommyhalleland@hotmail.com">
          📧 tommyhalleland@hotmail.com
        </a>
      </h4>
      <h4>📞 458 64 324</h4>
      <h4>
        <img className="Logo" alt="Github logo" src={githubLogo} /> Github:
        <a href="https://github.com/Tommyhh04" target="blank">
          Tommyhh04
        </a>
      </h4>
    </div>
  );
}
