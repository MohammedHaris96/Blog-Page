import "./Styles/Homepage.css";
// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  const blogs = [
    {
      name: "vacation",
      description: "This is my blog for the vacation",
      title: "Vacation",
    },

    {
      name: "vacation",
      description: "This is my blog for the vacation",
      title: "Vacation",
    },

    {
      name: "vacation",
      description: "This is my blog for the vacation",
      title: "Vacation",
    },
  ];

  return (
    <div className="homepage-container ">
      <h1>This is a container for the blog page....</h1>
      <h1>This is Heading in main the container</h1>
      <h1>Hello</h1>

      <h1>This is a component in homepage</h1>
      <h1>This is a component in homepage</h1>
      {blogs.map((blog) => {
        return <div>{blog.name}</div>;
      })}
      {/* <AuthorImage /> */}
    </div>
  );
};

export default Homepage;
