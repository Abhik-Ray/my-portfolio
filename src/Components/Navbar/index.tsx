import { FunctionComponent } from "react";
import "./styles.scss";

const Navbar: FunctionComponent = () => {
  return (
    <div className="navbar-wrapper">
      {/* <h1>Abhik Ray</h1> */}
      <div className="navigation">
        <ul>
          <li>About Me</li>
          <li>Experience</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
