import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
const Header = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            Farzad Blog
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
