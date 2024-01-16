import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function IndividualProject({
  name,
  type,
  shortDesc,
  longDesc,
  img,
  link
}) {
  return (
    <>
      <img
        className="project-image"
        src={img}
        alt="image"
        width={100}
        height={100}
      />
      <h1>{name}</h1>
      <p>{type}</p>
      <p>
        <b>{shortDesc}</b>
      </p>
      <div className="more-info-button">
      <Button
        sx= {{ bgcolor: "#000000", '&hover': {bgcolor:"red"}}}
        variant="contained"
      >
         <Link to={link}>More Info</Link>
      </Button>
      </div>
    </>
  );
}

const theme = createTheme({
  palette: {
    dark: {
      main: "#ff0000 ",
      light: "#ff4f4f",
      dark: "#7a0000",
      contrastText: "#ffffff",
    },
  },
});