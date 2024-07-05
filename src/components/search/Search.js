import { useContext, useEffect, useState } from "react";
import { BlogsContext, useBlogs } from "../../context/BlogsContext";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Button, Grid } from "@mui/material";

import { GET_BLOGS_INFO } from "../../graphql/queries";
import {
  createQueryObject,
  filterBlogs,
  getInitialQuery,
  searchBlogs,
} from "../../helper/helper";

function Search() {
  const { loading } = useQuery(GET_BLOGS_INFO);
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { blogs } = useBlogs();
  console.log(blogs);
  const { setDisplay, query, setQuery } = useContext(BlogsContext);

  // looking for data we already searched it 👇
  useEffect(() => {
    setQuery((query) => createQueryObject(query, { search }));
  }, [loading]);

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
  }, []);

  // getting data we searched it 👇
  useEffect(() => {
    setSearchParams(query);
    let finalBlogs = searchBlogs(blogs, query.search);
    finalBlogs = filterBlogs(finalBlogs, query.category);
    setDisplay(finalBlogs);
    setSearch(query.search || "");
  }, [query]);

  // matching new data via searching 👇
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <Grid
      container
      spacing={2}
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
      <Grid item xs={12} sm={6} md={4} mb={2} display="flex">
        <input
          type="text"
          placeholder="Search . . ."
          variant="outlined"
          value={search}
          style={{
            border: "2px solid #9c27b0",
            padding: "10px",
            width: "250px",
            outline: "none",
            fontSize: ".9rem",
            color: "#9c27b0",
            borderRadius: "10px",
            marginRight: "3px",
          }}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%", borderRadius: 3, border: "2px solid" }}
          onClick={searchHandler}
        >
          {" "}
          search{" "}
        </Button>
      </Grid>
    </Grid>
  );
}

export default Search;
