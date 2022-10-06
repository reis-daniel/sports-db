import React from "react";
import IconArrowFilled from "../../assets/Icons/Icon_Arrow_filled.png";
import { useState, useEffect } from "react";
import "./ScrollUpArrow.scss";

const ScrollUpArrow = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll-up-arrow">
      {" "}
      {showTopBtn && (
        <svg
          id="svg"
          width="72"
          height="100%"
          viewBox="0 0 72 102"
          xmlns="http://www.w3.org/2000/svg"
          alt="Icon arrow up"
          onClick={goToTop}
          className="scroll-up-arrow-desktop"
        >
          <path
            d="M15.7069 27.4451L0 54.9396L10.9306 55.227L21.8611 55.5144V76.0155V96.6124H32.4243H42.9874V76.0155V55.5144L53.4587 55.227L63.93 54.9396L48.4068 28.1157C39.8644 13.4584 32.5161 1.00444 32.1487 0.621239C31.7813 0.23804 24.3412 12.3088 15.7069 27.4451Z"
            id="arrow-fill"
            stroke="rgb(232, 53, 57)"
            strokeWidth="3"
            fill="transparent"
          ></path>

          <mask id="arrow">
            <path
              d="M15.7069 27.4451L0 54.9396L10.9306 55.227L21.8611 55.5144V76.0155V96.6124H32.4243H42.9874V76.0155V55.5144L53.4587 55.227L63.93 54.9396L48.4068 28.1157C39.8644 13.4584 32.5161 1.00444 32.1487 0.621239C31.7813 0.23804 24.3412 12.3088 15.7069 27.4451Z"
              id="arrow-fill"
              fill="#fff"
            ></path>
          </mask>
          <g mask="url('#arrow')">
            <rect
              id="rect"
              width="100%"
              height="100%"
              fill="rgb(232, 53, 57)"
            ></rect>
          </g>
        </svg>
      )}{" "}
      {showTopBtn && (
        <img
          src={IconArrowFilled}
          alt="Icon arrow up"
          onClick={goToTop}
          className="scroll-up-arrow-mobile"
        />
      )}{" "}
    </div>
  );
};

export default ScrollUpArrow;
