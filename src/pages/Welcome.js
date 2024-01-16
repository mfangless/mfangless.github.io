import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Welcome() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="centered-thing">
        <h1>welcome, user</h1>
        <Link to="/projects" className="enter-button">
          access
        </Link>
        
      </div>
    </m.div>
  );
}
