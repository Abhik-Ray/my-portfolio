import { FunctionComponent } from "react";
import Navbar from "./Components/Navbar";
import Typewriter from "typewriter-effect";
import "./styles/index.scss";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Typewriter
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
      /> */}
    </div>
  );
};

export default App;
