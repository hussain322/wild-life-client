import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import FunFacts from "../FunFacts/FunFacts";
import ProgressBar from "../ProgressBar/ProgressBar";
import ServiceLimit from "../ServiceLimit/ServiceLimit";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ServiceLimit />
      <ProgressBar />
      <FunFacts />
    </div>
  );
};

export default Home;
