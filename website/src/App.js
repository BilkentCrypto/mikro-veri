import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Proof from "./components/Proof";
import Footer from "./components/Verify";
import Government from "./components/Government";
import NavbarGovernment from "./components/NavbarGovernment";
import {useWeb3React} from '@web3-react/core';
import { Web3ReactProvider } from '@web3-react/core';
import {ethers} from "ethers";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";



window.Buffer = window.Buffer || require("buffer").Buffer;

const getLibrary =(provider) => {
  return new ethers.providers.Web3Provider(provider);
};

function App() {
  return (

    <Web3ReactProvider getLibrary={getLibrary}>

    
    
    <div>
      
      
      <Router>
        <Routes>
          <Route exact path="/devlet" element={<><NavbarGovernment/><Government/></>} />
          <Route exact path="" element={<><Navbar/><Header/><Proof/><Footer/></>}/>
        </Routes>
        <ul>
            <li><Link to="/devlet">Home</Link></li>
        
        </ul>
        
        
        
      </Router>

    </div>

    </Web3ReactProvider>
   
  );
}

export default App;
