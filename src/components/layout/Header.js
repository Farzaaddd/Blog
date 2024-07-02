import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography
            component="h1"
            variant="h5"
            fontWeight="700"
            flex={1}
            sx={{ display: "flex", alignItems: "center" }}
          >
            Farzad Blog <BookIcon sx={{ ml: 1 }} />
          </Typography>

          <List sx={{ display: "flex", alignItems: "center" }}>
            <ListItem>
              {" "}
              <Link to="home"> HOME </Link>{" "}
            </ListItem>

            <ListItem>
              {" "}
              <Link to="blogs"> Blogs </Link>{" "}
            </ListItem>

            <ListItem>
              {" "}
              <Link to="authors"> Authors </Link>{" "}
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
