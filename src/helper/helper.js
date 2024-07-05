const timeEstimate = (time) => {
  const dateString = time;
  const date = new Date(dateString);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds}`;
  const formattedDateTime = `${formattedDate} - ${timeString}`;
  return formattedDateTime;
};

const searchBlogs = (blogs, search) => {
  if (!search) return blogs;
  const searchedBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search)
  );
  return searchedBlogs;
};

const filterBlogs = (blogs, category) => {
  if (!category) return blogs;
  const filteredBlogs = blogs.filter((blog) => blog.category === category);
  return filteredBlogs;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const search = searchParams.get("search");
  if (search) query.search = search;

  const category = searchParams.get("category");
  if (category) query.category = category;
  return query;
};

export {
  timeEstimate,
  searchBlogs,
  createQueryObject,
  filterBlogs,
  getInitialQuery,
};
