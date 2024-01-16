import Navbar from "../Navbar";
import ProjectList from "../ProjectList/ProjectList";
import { motion as m } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Navbar />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ProjectList />
      </m.div>
    </>
  );
}
