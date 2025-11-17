import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../recipe-sharing-app/recipe-sharing-app/src/components/Navbar";
import Home from "../../recipe-sharing-app/recipe-sharing-app/src/components/Home";
import About from "../../recipe-sharing-app/recipe-sharing-app/src/components/About";
import Services from "../../recipe-sharing-app/recipe-sharing-app/src/components/Services";
import Contact from "../../recipe-sharing-app/recipe-sharing-app/src/components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
