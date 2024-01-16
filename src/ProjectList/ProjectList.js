import IndividualProject from "./IndividualProject";
import { Link, Route, Routes } from "react-router-dom";

export default function ProjectList() {
  return (
    <>
      <div>
        <div className="newest-project">
          <IndividualProject
            name="Newest Project"
            type="Game"
            shortDesc="A short description."
            img="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            link="/project1"
          />
        </div>
      </div>
      <p className="archives">Archives</p>
      <ul className="projects">
        <li className="project-container">
          <IndividualProject
            name="Older Project"
            type="Game"
            shortDesc="A short description."
            img="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            link="/project1"
          />
        </li>
        <li className="project-container">
          <IndividualProject
            name="Older Project"
            type="Game"
            shortDesc="A short description."
            img="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            link="/project1"
          />
        </li>
        <li className="project-container">
          <IndividualProject
            name="Older Project"
            type="Game"
            shortDesc="A short description."
            img="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            link="/project1"
          />
        </li>
        <li className="project-container">
          <IndividualProject
            name="Older Project"
            type="Game"
            shortDesc="A short description."
            img="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
            link="/project1"
          />
        </li>
      </ul>
    </>
  );
}

export function ProjectWindow() {}
