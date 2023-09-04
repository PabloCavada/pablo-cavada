import './App.css';
import Home from './components/home/Home';
import ContactMe from "./components/pages/contact/ContactMe"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pablo-cavada' element={<Home/>} />
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
