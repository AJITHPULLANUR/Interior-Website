import React from "react";
import review from "./images/pngwing.com (2).png";
import sarath from "./review/sarath.jpg";
import niyas from "./review/niyas.jpg";
import camilo from "./review/camilo.jpg";
import ajith from "./review/ajith.jpg";

const Content4 = () => {
  return (
    <div className="cont_4">
      <div className="reviewbox">
        <p className="reviewtext">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; From creating the perfect layout to finding pieces I absolutely loved,
          your design really took my space to the next level. I never dreamed my
          home could look – and feel – this good!....സംഭവം കുടുക്കി
          ..തിമിർത്തു...കലക്കി...
        </p>
        <div className="rowimage">
          <img
            className="sarathi"
            width="50px"
            height="50px"
            src={sarath}
            alt=""
          />
          <h4>SARATH V NAIR</h4>
        </div>
        <img width="120px" height="80px" src={review} alt="" />
      </div>

      <div className="reviewbox">
        <p className="reviewtext">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I love your interior design, but Natalie really used her professional eye
          to create an office design that was cohesive and beautiful.
          I love my office!!
          ...നീ പൊന്നപ്പൻ അല്ലടാ....തങ്കപ്പൻ
        </p>
        <div className="rowimage">
          <img
            className="sarathi"
            width="50px"
            height="50px"
            src={niyas}
            alt=""
          />
          <h4>NIYAS CHEMMALA</h4>
        </div>
        <img width="120px" height="80px" src={review} alt="" />
      </div>

      <div className="reviewbox">
        <p className="reviewtext">

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I LOVE the new design Annie made for us! Ananthu hit the nail on the head
          and totally read my mind about what I wanted!!! ...ഉഫ് സൂപ്പർ
        </p>
        <div className="rowimage">
          <img
            className="sarathi"
            width="50px"
            height="50px"
            src={camilo}
            alt=""
          />
          <h4>CAMILO</h4>
          
        </div>
        <img width="120px" height="80px" src={review} alt="" />
      </div>

      <div className="reviewbox">
        <p className="reviewtext">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our designer had such a great sense of our style from the beginning,
          but he elevated it with creative ideas and really great pieces we
          wolid have never chosen on our own! ..Nice work..keep it up
        </p>
        <div className="rowimage">
          <img
            className="sarathi"
            width="50px"
            height="50px"
            src={ajith}
            alt=""
          />
          <h4>AJITH</h4>
        </div>
        <img width="120px" height="80px" src={review} alt="" />
      </div>
    </div>
  );
};

export default Content4;
