import React from "react";
import "./App.css";
import { Error, Gallery, Home, Lore, Myst } from "./pages/index";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { Footer, NavBar } from "./components";
import { useFilterContext } from "./components/filter/filter_context";

function App() {
  const {page} = useFilterContext();
  
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/myst" element={<Myst />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {page !== 'gallery' && <Footer/>}
      </Router>
    </div>
  );
}

export default App;
