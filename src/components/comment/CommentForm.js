import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CommentForm = ({ slug }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          {" "}
          Leave a comment{" "}
        </Typography>
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="Username"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="Comment"
          variant="outlined"
          sx={{ width: "100%" }}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>

      <Grid item xs={12} m={2} mt={0}>
        <Button variant="contained"> Send </Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
