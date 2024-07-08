import { FunctionComponent, useState } from "react";
import "./styles.scss";

interface TypewriterHeadingprops {
  textArray: [string, ...string[]];
}

const TypewriterHeading: FunctionComponent<TypewriterHeadingprops> = (
  props
) => {
  const [text, setText] = useState<string>(props.textArray[0]);
  return <h1 className="typewriter">{text}</h1>;
};

export default TypewriterHeading;
