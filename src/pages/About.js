import Navbar from "../Navbar";
import { motion as m } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="centered-thing">
          <div className="big-text">
            <h1>Who am I?</h1>
            <p>
              I'm mFangless, a front end developer, video game developer and
              graphic designer. I created this site using React in order to
              showcase my skills. Here you will find various projects I worked
              on, and detailed information about each of them. Have a pleasant
              stay, user!
            </p>
          </div>
        </div>
      </m.div>
    </>
  );
}
