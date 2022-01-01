import "./Styles/Homepage.css";
import axios from "axios";
import BlogList from "./BlogList";
import { useState, useEffect } from "react";

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  //state of blogs

  const deleteBlog = (id) => {
    const tempBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(tempBlogs);
  };

  const [blogs, setBlogs] = useState(null);

  // const getAllBlogs = async () => {
  //   debugger;
  //   //Loader for blogs
  //   try {
  //     let url = `//localhost:8000/blogs`;
  //     const response = await axios.get(url);
  //     console.log(response);
  //     setBlogs(response.data.data);
  //     //set loading false
  //   } catch (error) {
  //     // set loading = false
  //   }
  // };

  // getAllBlogs();
  useEffect(() => {
    debugger;
    fetch("http://localhost:8000/blogs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <>
      <div className="homepage-container  ">
        <h1>The blog page</h1>

        <div className="blog-card d-flex justify-content-center ">
          {blogs && (
            <BlogList
              blogs={blogs.filter((blogs) => blogs.title === "Holidays")}
              deleteBlog={deleteBlog}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
