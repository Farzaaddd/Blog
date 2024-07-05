import BlogsProvider from "./context/BlogsContext";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout/Index";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";
// import AllBlogs from "./components/blog/AllBlogs";
import AllAuthors from "./components/author/AllAuthors";
import ScrollToTop from "./components/scroll/scrollToTop";
import AllBlogsStructure from "./components/blog/AllBlogsStructure";

const App = () => {
  return (
    <>
      <BlogsProvider>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route index path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blogs" element={<AllBlogsStructure />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/authors" element={<AllAuthors />} />
            <Route path="/authors/:slug" element={<AuthorPage />} />
          </Routes>
        </Layout>
      </BlogsProvider>
    </>
  );
};

export default App;
