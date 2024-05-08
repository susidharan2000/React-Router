import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import DataScience from "./Pages/DataScience";
import CyberSecurity from './Pages/CyberSecurity'
import Career from "./Pages/Career"
import Data from "./Data";
function App() {
  return(<>
 <BrowserRouter>
  <div><Navbar /></div>
  <Routes>
    <Route path="/" element={<All data={Data}/>}/>
    <Route path="/fsd" element={<FullStack data={Data} />} />
    <Route path="/ds" element={<DataScience data={Data}/>} />
    <Route path="/cs" element={<CyberSecurity data={Data}/>} />
    <Route path="/career" element={<Career data={Data}/>} />
  </Routes>
  </BrowserRouter>
  </>);
}

export default App
