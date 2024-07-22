import { FunctionComponent } from "react";
import Navbar from "./Components/Navbar";
import Typewriter from "typewriter-effect";
import "./styles/index.scss";
import SpineTimeline from "./Components/SpineTimeline";

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Navbar />
      <SpineTimeline 
        points={['2018', '2022', '2024', '2077']} 
        selectedPoint={0} 
        selectedPointProgress={0} 
      />
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
