import { FunctionComponent } from "react";
import Navbar from "./Components/Navbar";
import Typewriter from "typewriter-effect";
import "./styles/index.scss";
import SpineTimeline from "./Components/SpineTimeline";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <SpineTimeline
        points={["2018", "2022", "2024", "2032", "2077"]}
        selectedPoint={3}
        selectedPointProgress={50}
      /> */}
      <div className="main-body">
        <div className="intro-text">
          <Typewriter
            options={{
              strings: [
                "Welcome",
                "स्वागतम्‌",
                "স্বাগতম",
                "Willkommen",
                "いらっしゃいませ",
              ],
              autoStart: true,
              loop: true,
              delay: "natural",
              deleteSpeed: "natural",
              wrapperClassName: "typewriter-wrapper",
              cursorClassName: "typewriter-cursor",
            }}
          />
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            enim dicta saepe aperiam, ullam rem voluptatum consequatur et quis
            rerum maxime cumque non quaerat ut repellendus eius ipsam
            dignissimos? Aspernatur.
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            enim dicta saepe aperiam, ullam rem voluptatum consequatur et quis
            rerum maxime cumque non quaerat ut repellendus eius ipsam
            dignissimos? Aspernatur.
          </p>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            enim dicta saepe aperiam, ullam rem voluptatum consequatur et quis
            rerum maxime cumque non quaerat ut repellendus eius ipsam
            dignissimos? Aspernatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
