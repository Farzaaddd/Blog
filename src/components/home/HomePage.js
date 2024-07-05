import { Container, Grid, Typography } from "@mui/material";
import Authors from "../author/Authors.js";
import Blogs from "../blog/Blogs";
import Search from "../search/Search.js";
import Categories from "../categories/Categories.js";

function HomePage() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={4}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={4}
            fontWeight={700}
          >
            {" "}
            Search{" "}
          </Typography>
          <Search />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={2} mt={4}>
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

        <Grid item xs={12} md={8} mt={4}>
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

        <Grid
          item
          xs={12}
          md={2}
          mt={4}
          pr={2}
          sx={{
            "& .css-1t2rkjl-MuiGrid-root": {
              marginLeft: "0px !important",
            },
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            marginBottom={5}
            fontWeight={700}
          >
            {" "}
            Categories{" "}
          </Typography>
          <Categories />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
