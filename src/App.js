import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import { AnimatePresence } from "framer-motion";
import Project1 from "./ProjectList/Project1.js";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
      {/*<Navbar />*/}
      <div className="container">
        <Routes>
          {/*<Route path="/" element={<Welcome />} />*/}
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </div>
    </>

  );
}
export default App;
