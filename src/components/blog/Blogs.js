import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import { useDisplay } from "../../context/BlogsContext";

import { Grid, Typography } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";
import img from "../../assets/data-error.png";

const Blogs = () => {
  const { loading, error } = useQuery(GET_BLOGS_INFO);
  const { display } = useDisplay();

  if (loading) return <Loader />;
  if (error) return <h4> Something went wrong! </h4>;

  return (
    <Grid container spacing={2}>
      {display.length ? (
        display.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={display.id}>
            <CardEl {...blog} />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography component="h4" variant="h6">
            Unfortunately I couldn't find the result you need 😟 Search again !{" "}
          </Typography>
          <img src={img} alt="Image" width="400px" height="400px" />
        </Grid>
      )}
    </Grid>
  );
};

export default Blogs;
