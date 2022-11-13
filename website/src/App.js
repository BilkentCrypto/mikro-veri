import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Proof from "./components/Proof";
import Footer from "./components/Verify";
import Government from "./components/Government";
import NavbarGovernment from "./components/NavbarGovernment";

import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";



window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
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
   
  );
}

export default App;
