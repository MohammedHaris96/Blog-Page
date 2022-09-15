import "./Styles/Homepage.css";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import userImage from "../assets/IMG_E3208.JPG";

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  //state of blogs

  const deleteBlog = (id) => {
    const tempBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(tempBlogs);
  };

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("Error while fetching");
          }
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 5000);
  }, []);

  return (
    <>
      <div className="homepage-container">
        <div className="intro-content">
          <div className="text-content">
            <h4>Hi There,</h4>
          </div>
          <div className="text-content-name">
            I am Har<span className="name-auth">i</span>s
          </div>
          <div className="text-profession">Software DeveloperDeveloper</div>
        </div>
        <div className="homepage-img">
          <img src={userImage} className="user-img" alt="user-image"></img>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
