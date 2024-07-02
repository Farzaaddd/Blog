import { Container, Grid } from "@mui/material";
import Authors from "./Authors";

const AllAuthors = () => {
  return (
    <Container maxWidth="lg">
      <Grid item xs={12} md={4} mt={4}>
        <Authors />
      </Grid>
    </Container>
  );
};

export default AllAuthors;
