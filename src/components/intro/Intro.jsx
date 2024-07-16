import React from "react";
import "./Intro.css";
import colors from "../../colors/colors";
import teachingPng from "../../images/teaching_anim.png";
import Button from "react-bootstrap/Button";
import { RiLiveFill } from "react-icons/ri";
import { MdOutlineCardMembership } from "react-icons/md";
import { MdOutlineQuestionAnswer } from "react-icons/md";

const intro = () => {
  return (
    <div className="intro_main">
      <div className="intro_left_content">
        <div className="intro_left_inner_content">
          <div className="intro_top_text" style={{ color: "black" }}>
            Welcome to Teach Visita
          </div>
          <div className="intro_header_text" style={{ color: colors.primary }}>
            Make your own educational app and website
          </div>
          <div className="intro_body_text">
            Learnify is an interactive educational platform providing
            personalized learning through video lessons, quizzes, and adaptive
            resources to enhance academic performance.
          </div>

          <div className='intro_btn' >
          Book a free demo
        </div>
       
        </div>
      </div>

      <div className="intro_right_content">
        <div className="intro_live_box" style={{ right: "60%", bottom: "80%" }}>
          <RiLiveFill className="intro_box_img" style={{ color: 'red' }} />
          <div>
            <div className="intro_box_title">Live Classes</div>
            <div className="intro_box_body">Interactive live stream</div>
          </div>
        </div>

        <div className="intro_live_box" style={{ right: "50%", top: "70%" }}>
          <MdOutlineQuestionAnswer className="intro_box_img" style={{ color: colors.primary }} />
          <div>
            <div className="intro_box_title">Online Test</div>
            <div className="intro_box_body">Interactive live stream</div>
          </div>
        </div>

        <div className="intro_live_box" style={{ left: "60%", bottom: "50%" }}>
          <MdOutlineCardMembership className="intro_box_img" style={{ color: 'green' }} />
          <div className="intro_box_text_box">
            <div className="intro_box_title">Plus Course</div>
            <div className="intro_box_body">Interactive live stream</div>
          </div>
        </div>

        <img
          src={teachingPng}
          className="intro_teaching_png"
          alt="React logo"
        />
      </div>
    </div>
  );
};

export default intro;
