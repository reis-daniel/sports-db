import React from "react";
import IconArrow from "../../assets/Icons/Icon_Arrow.svg";
import IconArrowFilled from "../../assets/Icons/Icon_Arrow_filled.png";
import { useState, useEffect } from "react";

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
        <img
          src={IconArrow}
          alt="Icon arrow up"
          onClick={goToTop}
          className="scroll-up-arrow-desktop"
        />
      )}{" "}
      ||{" "}
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
