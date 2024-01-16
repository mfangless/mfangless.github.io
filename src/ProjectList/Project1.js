import Navbar from "../Navbar";
import { motion as m } from "framer-motion";
import YoutubeEmbed from "../YoutubeEmbed";

export default function Project1() {
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
            <h1>Project Title</h1>
            <YoutubeEmbed embedId="rokGy0huYEA" />
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="placeholder"
            ></img>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="placeholder"
            ></img>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="placeholder"
            ></img>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="placeholder"
            ></img>
            <img
              src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
              alt="placeholder"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              ipsum urna, ultricies in convallis finibus, semper sit amet dolor.
              Ut vel magna est. Duis malesuada tempus lacus, vel ultricies enim
              fermentum lacinia. Donec malesuada sagittis magna ac luctus. Cras
              id elit eu nunc condimentum lacinia. Suspendisse nec varius diam.
              Proin sit amet massa rhoncus, gravida dui condimentum, porttitor
              lacus. Nunc consectetur lorem eget aliquet congue. Maecenas
              consectetur ex nibh, eu mattis nibh cursus vitae. Suspendisse
              elementum odio eu massa aliquet placerat. Nullam nec massa
              rhoncus, cursus mauris non, mollis leo.
            </p>{" "}
          </div>
        </div>
      </m.div>
    </>
  );
}
