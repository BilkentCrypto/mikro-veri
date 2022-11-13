import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pool from "./components/Pool";
import Footer from "./components/Footer";

window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Pool/>
      <Footer/>
    </div>
  );
}

export default App;
