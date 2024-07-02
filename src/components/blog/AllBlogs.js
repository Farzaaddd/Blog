import React from "react";
import { useQuery } from "@apollo/client";
import { useDisplay } from "../../context/BlogsContext";
import { GET_BLOGS_INFO } from "../../graphql/queries";

import { Container, Grid, Typography } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import Search from "../categories/Search.js";

const AllBlogs = () => {
  const { loading, error } = useQuery(GET_BLOGS_INFO);
  const { display } = useDisplay();

  if (loading) return <Loader />;
  if (error) return <h4> Something went wrong! </h4>;
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={4}>
          <Typography
            component="h3"
            variant="h5"
            marginBottom={3}
            fontWeight={700}
          >
            {" "}
            Categories{" "}
          </Typography>
          <Search />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={3}>
        {display.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEl {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllBlogs;
