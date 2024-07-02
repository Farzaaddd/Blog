import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/Authors.js";
import Blogs from "../blog/Blogs";
import Search from "../categories/Search.js";

function HomePage() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={6} mt={4}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={4}
            fontWeight={700}
          >
            {" "}
            Categories{" "}
          </Typography>
          <Search />
        </Grid>
      </Grid>

      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} md={3} mt={4}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={3}
            fontWeight={700}
          >
            {" "}
            Authors{" "}
          </Typography>
          <Authors />
        </Grid>

        <Grid item xs={12} md={9} mt={4}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={3}
            fontWeight={700}
          >
            {" "}
            Blogs{" "}
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
