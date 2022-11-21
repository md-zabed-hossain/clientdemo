import React from "react";
import "./App.css";
import { Error, Gallery, Home, Lore, Myst } from "./pages/index";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  // const [page,setPage] = useState(null);
  // useEffect(() => {
  //   setPage("home")
  // }, [])
 
  return (
    <div className="App">
      <Router>
      {/* <NavBar page={page}/> */}
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/myst" element={<Myst />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
