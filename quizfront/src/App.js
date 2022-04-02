
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './menu/menu'
import Admin from './admin/admin'
import Qcm from "./jeux/qcm/qcm"; 

import AddQcm from "./admin/addQcm/addQcm";

import './global.css'

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Menu  />} />
        <Route path="/adminBenjamin" element={<Admin />}/>

        <Route path="/qcm" element={<Qcm />}/>
        
        <Route path="addqcm" element={<AddQcm />}/>
  
      </Routes>
  </BrowserRouter>
  );
}

export default App;