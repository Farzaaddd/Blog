import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (error) return <h4> Something went wrong! </h4>;

  const { authors } = data;
  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography
                component="p"
                variant="p"
                color={
                  author.name === "Farzad Solaimani" ? "secondary" : "primary"
                }
              >
                {" "}
                {author.name}{" "}
              </Typography>
            </Link>
          </Grid>

          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider
                variant="middle"
                sx={{ margin: "10px", color: "secondary" }}
              />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Authors;
