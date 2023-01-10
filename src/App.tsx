import React from "react";
import { CustomCarousel } from "./components/CustomCarousel";
import { highlights } from "./cardData";
import "./App.css";

function App() {
  return <CustomCarousel data={highlights} noOfCards={9} />;
}

export default App;
