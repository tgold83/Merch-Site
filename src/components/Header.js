import React from "react";
import DIVANA from "./../img/DIVANA.png";

function Header(){
  return(
    <React.Fragment>
      <h1>DIVANA</h1>
      <h3>We don't care if you have no algo-rhythm, dancing alone bytes!</h3>
      <img src={DIVANA} alt="band logo" width='15%' />
    </React.Fragment>
  );
}

export default Header;