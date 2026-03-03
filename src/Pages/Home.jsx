import NavBar from "../Components/NavBar";
import Landing from "../Components/Landing";
import { useState } from "react";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Footer />
    </>
  );
}

export default Home;