import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import styles from "./Header.module.css";
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
            <Link
              className={styles.links}
              to="home"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              Farzad Blog <BookIcon sx={{ ml: 1 }} />
            </Link>
          </Typography>

          <List sx={{ display: "flex", alignItems: "center" }}>
            <ListItem>
              {" "}
              <Link to="home" className={styles.links}>
                {" "}
                HOME{" "}
              </Link>{" "}
            </ListItem>

            <ListItem>
              {" "}
              <Link to="blogs" className={styles.links}>
                {" "}
                Blogs{" "}
              </Link>{" "}
            </ListItem>

            <ListItem>
              {" "}
              <Link to="authors" className={styles.links}>
                {" "}
                Authors{" "}
              </Link>{" "}
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
