import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";
import { GET_BLOGS_INFO } from "../graphql/queries";

export const BlogsContext = createContext();

function BlogsProvider({ children }) {
  const { loading, data } = useQuery(GET_BLOGS_INFO);
  const [query, setQuery] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    // loading && setBlogs(data.posts);
    if (!loading) {
      setBlogs(data.posts);
    }

    setDisplay(blogs);
  }, [loading]);

  return (
    <BlogsContext.Provider
      value={{ blogs, display, setDisplay, query, setQuery }}
    >
      {children}
    </BlogsContext.Provider>
  );
}

const useBlogs = () => {
  const blogs = useContext(BlogsContext);
  return blogs;
};

const useDisplay = () => {
  const display = useContext(BlogsContext);
  return display;
};

export default BlogsProvider;
export { useBlogs, useDisplay };
