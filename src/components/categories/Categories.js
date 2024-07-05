import { useContext } from "react";
import { categories } from "../constants/list";
import { BlogsContext } from "../../context/BlogsContext";
import { createQueryObject } from "../../helper/helper";
import { Grid } from "@mui/material";
import styles from "./Categories.module.css";

const Categories = () => {
  const { setQuery } = useContext(BlogsContext);

  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
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
      <Grid item xs={12} sm={6} md={4} mb={2}>
        <ul onClick={categoryHandler} className={styles.ul}>
          {categories.map((item) => (
            <li key={item.id}> {item.type} </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Categories;
