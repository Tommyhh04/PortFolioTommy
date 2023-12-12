/* eslint-disable react/prop-types */
import "./StyleProjectCard.css";

//Here are the skeleton for the projects to be showcased using props

export default function MyProjects(props) {
  return (
    <div className="ProjectCard">
      <h1>{props.title}</h1>
      <img src={props.img} />
      <p>{props.desc}</p>
    </div>
  );
}
