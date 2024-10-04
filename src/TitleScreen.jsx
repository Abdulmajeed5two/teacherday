import React from "react";
import "./App.css"; 
import Bat from "./Bat";
import batmanImage from "./assets/bat1.jpg";
import batmobile from "./assets/batmobile.png"

const TitleScreen = () => {
  return (
    <div className="title-screen">
      <div className="text-content">
        <h1>
          Happy Teacher's Day to the one and only Desi Batman, Daniyal Sir! 🦇
        </h1>
        <p>
          Just like the Dark Knight saves Gotham, you save us from the chaos of
          code, guiding us through every bug, loop, and algorithm with your
          wisdom. Your superpower isn’t just your knowledge, but your ability to
          inspire and challenge us to be the best versions of ourselves. Thank you
          for being our hero in the classroom and beyond! Stay legendary, Code
          Crusader.
        </p>
      </div>
      <div className="bat-content">
        <Bat />
        <img src={batmanImage} alt="Desi Batman" className="batman-image" />
      </div>
    </div>
  );
};

export default TitleScreen;
