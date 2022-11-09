import React from "react";
import Banner from "../Banner/Banner";
import FunFacts from "../FunFacts/FunFacts";
import ProgressBar from "../ProgressBar/ProgressBar";
import ServiceLimit from "../ServiceLimit/ServiceLimit";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProgressBar />
      <FunFacts />
    </div>
  );
};

export default Home;
