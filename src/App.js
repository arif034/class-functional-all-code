import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contacts from "./Contacts.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
