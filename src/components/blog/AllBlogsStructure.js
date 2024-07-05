import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AllBlogs from "./AllBlogs";
import Search from "../search/Search";
import Categories from "../categories/Categories";

function AllBlogsStructure() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={4} ml={2}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={3}
            fontWeight={700}
          >
            {" "}
            Search{" "}
          </Typography>
          <Search />
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item xs={12} md={10} mt={4}>
          <AllBlogs />
        </Grid>

        <Grid item xs={12} md={2} mt={6}>
          <Categories />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllBlogsStructure;
