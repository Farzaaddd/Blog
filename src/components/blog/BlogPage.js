import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import { Container, Typography, Grid, Avatar, Box } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
import { timeEstimate } from "../../helper/helper";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h4> Something went wrong! </h4>;

  const { title, coverPhoto, author, content, datePublished } = data.post;
  return (
    <Container maxWidth="lg">
      <Grid Container>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {title}
          </Typography>
          <ArrowForwardRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: "pointer" }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            component="span"
            variant="small"
            sx={{ color: "grey" }}
            ml={1}
          >
            {timeEstimate(datePublished)}
          </Typography>
        </Grid>

        <Grid item xs={12} mt={6} textAlign="center">
          <img
            src={coverPhoto.url}
            alt={slug}
            // width="100%"
            style={{ borderRadius: 15, width: "calc(100% - 100px)" }}
          />
        </Grid>

        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={author.avatar.url}
            sx={{ width: 80, height: 80, marginRight: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h6" fontWeight={700}>
              {author.name}
            </Typography>

            <Typography component="p" variant="p" color="grey">
              {author.field}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(content.html),
            }}
          ></div>
        </Grid>

        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>

        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
