import "./Styles/Homepage.css";
import { Card, Carousel } from "antd";
const { Meta } = Card;

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  // Array of objects for blog
  const blogs = [
    {
      vacationName: "United Kingdom",
      descriptionLondon:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      titleUK: "Vacation",
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
    <>
      <div className="homepage-container  ">
        <h1>This is a container for the blog page....</h1>

        <div className="blog-card">
          <Card
            hoverable
            style={{ width: 400, borderRadius: "5px" }}
            cover={
              <>
                <div className="d-flex justify-content-center align-items-center">
                  <span>
                    <i class="fas fa-plane" style={{ fontSize: "20px" }}></i>
                  </span>
                  <h4 style={{ margin: "5px" }}>Visit to United Kingdom</h4>
                </div>
              </>
            }
          >
            {blogs.map((blog) => {
              return (
                <Meta
                  title={blog.vacationName}
                  description={blog.descriptionLondon}
                />
              );
            })}
          </Card>
        </div>
      </div>
    </>
  );
};

export default Homepage;
