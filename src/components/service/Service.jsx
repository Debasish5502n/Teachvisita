import React from "react";
import "./Service.css";
import { RiLiveFill } from "react-icons/ri";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { MdBatchPrediction } from "react-icons/md";
import { PiSpeakerHigh } from "react-icons/pi";

const Service = () => {
  return (
    <div className="service_main">
      <div className="service_parent">

        <div className="service_box" style={{ color: '#5270FF' }}>
          <MdMarkUnreadChatAlt  className="service_box_img" />
          <div className="service_box_header">Community</div>
          <div className="service_box_body">
            Create your batch group
          </div>
        </div>

        <div className="service_box">
          <FcCustomerSupport className="service_box_img" />
          <div className="service_box_header">24 * 7</div>
          <div className="service_box_body">
            We are allways available for you
          </div>
        </div>

        <div className="service_box">
          <MdBatchPrediction className="service_box_img" style={{ color: 'red' }}/>
          <div className="service_box_header">Manage Batch</div>
          <div className="service_box_body">
            In community support create
          </div>
        </div>

        <div className="service_box">
          <PiSpeakerHigh className="service_box_img" style={{ color: '#308247' }}/>
          <div className="service_box_header">Marketing</div>
          <div className="service_box_body">
            In community support create
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
