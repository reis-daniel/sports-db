import React from "react";
import IconArrow from "../../assets/Icons/Icon_Arrow.svg";
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
        <img src={IconArrow} alt="Icon arrow up" onClick={goToTop} />
      )}{" "}
    </div>
  );
};

export default ScrollUpArrow;
