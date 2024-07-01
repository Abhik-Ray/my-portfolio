import { FunctionComponent } from "react";
import "./styles.scss";

const Toolbar: FunctionComponent = () => {
  return (
    <div className="toolbar">
      <ul>
        <li>About Me</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Toolbar;
