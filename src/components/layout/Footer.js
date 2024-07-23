import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
      <Typography
        component="p"
        variant="p"
        bgcolor="#4D194D"
        color="#FFF"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        Designed and developed by{" "}
        <Typography
          component="a"
          variant="a"
          color="#f79ad3"
          href="https://github.com/Farzaaddd/"
          target="_blank"
        >
          {" "}
          Farzaaddd{" "}
        </Typography>{" "}
        ❤
      </Typography>
    </footer>
  );
};

export default Footer;
