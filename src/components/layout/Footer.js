import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        Designed and developed by{" "}
        <Typography
          component="a"
          variant="a"
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
