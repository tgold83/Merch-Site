import './App.css';
import React from "react";
import Header from "./Header";
import AlbumControl from "./AlbumControl";
// import Clothing from "./Clothing";
// import MiscItem from "./MiscItem";
// import Ticket from "./Ticket";

function App() {
  return (
    <React.Fragment>
      <Header />
      <AlbumControl />
      {/* <Clothing />
      <MiscItem />
      <Ticket /> */}
    </React.Fragment>
  );
}

export default App;
