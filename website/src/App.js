import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pool from "./components/Pool";
import Footer from "./components/Footer";
import Government from "./components/Government";
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import { Input } from "@material-tailwind/react";


function App() {
  return (
    <div>
      

      
      <Router>
        <Routes>
          <Route exact path="/devlet" element={<Government/>} />
          <Route exact path="" element={<><Navbar/><Header/><Pool/><Footer/></>}/>
        </Routes>
        <ul>
            <li><Link to="/devlet">Home</Link></li>
        
        </ul>
        
        
         
        
        
      </Router>





    </div>
   
  );
}

export default App;
