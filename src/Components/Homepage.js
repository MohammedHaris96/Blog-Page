import "./Styles/Homepage.css";
import BlogList from "./BlogList";
import { useState } from "react";

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  //state of blogs

  const deleteBlog = (id) => {
    const tempBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(tempBlogs);
  };

  const [blogs, setBlogs] = useState([
    {
      name: "United Kingdom",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      title: "Holidays",
      id: 1,
    },

    {
      name: "United Kingdom",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      title: "Holidays",
      id: 2,
    },

    {
      name: "Australia",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      title: "Vacation",
      id: 3,
    },

    {
      name: "America",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      title: "Vacation",
      id: 4,
    },
  ]);
  return (
    <>
      <div className="homepage-container  ">
        <h1>The blog page</h1>

        <div className="blog-card d-flex justify-content-center ">
          <BlogList
            blogs={blogs.filter((blogs) => blogs.title === "Holidays")}
            deleteBlog={deleteBlog}
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
