import "./Projects.css";
//Imports the data to be used as props for the MyProjects
import projects from "./MyProjectsData";
//Imports the skeleton for the cards
import MyProjects from "../MyProjects/ProjectsBase/ProjectsBase";
//Imports images to be used in project display thumbnail

//Page that showcases some of my projects made through the bootcamp

export default function Projects() {
  const cards = projects.map((item) => {
    return (
      <MyProjects
        key={item.id}
        title={item.title}
        img={item.img}
        desc={item.desc}
        url={item.url}
      />
    );
  });
  console.log(projects);
  return (
    <div className="MyProjects--container">
      <section className="card--list">{cards}</section>
    </div>
  );
}
