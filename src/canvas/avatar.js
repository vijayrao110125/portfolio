import React, { useEffect } from "react";
import '../../src/App.css';

const Avatar = () => {
  useEffect(() => {
    // Eye movement logic
    let Pupils = document.getElementsByClassName("footer-pupil"),
      pupilsArr = Array.from(Pupils),
      pupilStartPoint = -10,
      pupilRangeX = 20,
      pupilRangeY = 15,
      mouseXStartPoint = 0,
      mouseXEndPoint = window.innerWidth,
      
      fracXValue = 0,
      mouseYEndPoint = window.innerHeight,
      
      fracYValue = 0,
      mouseXRange = mouseXEndPoint - mouseXStartPoint;

    const mouseMove = (e) => {
      fracXValue = ( e.clientX - mouseXStartPoint) / mouseXRange;
      fracYValue = ( e.clientY) / mouseYEndPoint;

      let t = pupilStartPoint + fracXValue * pupilRangeX;
      let o = pupilStartPoint + fracYValue * pupilRangeY;

      pupilsArr.forEach((pupil) => {
        pupil.style.transform = `translate(${t}px, ${o}px)`;
      });
    };

    const windowResize = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerHeight;
      mouseXRange = mouseXEndPoint - mouseXStartPoint;
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", windowResize);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", windowResize);
    };
  }, []);

  return (
    <div className="footer-avatar-container">
      <img
        src="./assets/footer-avatar-vijay.png"
        alt="animation-head"
        className="footer-avatar-img"
        id="footer-wala-avatar"
      />
      <div className="footer-avatar-face">
        <div className="footer-avatar-eye footer-left-eye">
          <div className="footer-pupil"></div>
        </div>
        <div className="footer-avatar-eye footer-right-eye">
          <div className="footer-pupil"></div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;



