import { useState } from "react";
import "./App.css";
import SimpleSet from "./Componenat/CimpleSet/SimpleSet";
import FuttorBbanre from "./Componenat/Futtor-banner/FuttorBbanre";
import Futtor from "./Componenat/Futtor/Futtor";
import GetStartedSct from "./Componenat/GetStartedSet/GetStartedSct";
import MainSection from "./Componenat/MainSection/MainSection";
import Navbar from "./Componenat/Navbar/Navbar";
import Premium from "./Componenat/Premium-banar/Premium";

function App() {
  const[card, setCard] = useState(0);
  return (
    <>
      <Navbar card={card} setCard={setCard} />
      <Premium />
      <MainSection  card={card} setCard={setCard}/>
      <GetStartedSct />
      <SimpleSet />
      <FuttorBbanre />
      <Futtor />
    </>
  );
}

export default App;
