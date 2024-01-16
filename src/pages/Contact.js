import Navbar from "../Navbar";
import { motion as m } from "framer-motion";

export default function Contact() {
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
            <h1>How can you contact me?</h1>
            <p>
              Send me an e-mail at <b>9cqwym3r9@mozmail.com</b> (yes this is an
              actual e-mail address)
            </p>
          </div>
        </div>
      </m.div>
    </>
  );
}
