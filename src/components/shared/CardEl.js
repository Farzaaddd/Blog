import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardEl = ({ title, slug, coverPhoto, author, datePublished }) => {
  // console.log(props);
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={
            <Avatar
              src={author.avatar.url}
              sx={{ width: "60px", height: "60px" }}
            />
          }
          title={
            <Typography component="p" variant="p" color="primary">
              {" "}
              {author.name}{" "}
            </Typography>
          }
          subheader={
            <Typography component="span" variant="small">
              {datePublished}
              {/* {datePublished[new Date().getMonth()]} */}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          fontSize="1rem"
          color="secondary"
          fontWeight={300}
        >
          {" "}
          {title}{" "}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            {" "}
            READ IT!{" "}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;
