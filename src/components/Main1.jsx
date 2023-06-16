import React from "react";
import design from "./images/edc110122grenney-web-extras-001-1666128634.jpg";

const Main1 = () => {
  return (
    <div className="Maindiv1">
      <div className="img1">
        <img className="design1" src={design} alt="" />
      </div>
      <div className="text1">
        <p className="para">
          RICH TAPESTRY Having artwork above the bed is a great idea, but if
          you’re worried about something falling in the middle of the
          night—particularly in an earthquake-prone area like Los Angeles—a
          tapestry is a great alternative. In New York, interior designer Todd
          Raymond paired this textile by Pauline Esparon with a wallcovering by
          Phillip Jeffries for a soft, tranquil look.
        </p>
      </div>
    </div>
  );
};

export default Main1;
