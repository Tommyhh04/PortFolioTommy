/* eslint-disable react/prop-types */
import "./StyleProjectCard.css";

//Here are the skeleton for the projects to be showcased using props
//
export default function MyProjects(props) {
  return (
    <div className="Project--Card">
      <h2>{props.title}</h2>

      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <img className="Project--Img" src={props.img} />
      </a>
      <p>{props.desc}</p>
    </div>
  );
}
