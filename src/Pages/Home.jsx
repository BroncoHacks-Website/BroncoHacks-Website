import { useState } from "react";
import Footer from "../Components/Footer.jsx";
function Home() {

  return (
    <> 
      <div>
        <h2>Hello team! Feel free to edit, refactor, or clean up anything as you see fit. If possible try and follow the file logic so it's uniform. You’re welcome to reuse or adapt code from previous years if it helps. Looking forward to seeing the BroncoHacks site come together!</h2>
        <a target="_blank" href="https://broncohacks.org/">Current BroncoHacks</a>
      </div>
      <Footer />
    </>
  );
}

export default Home;
