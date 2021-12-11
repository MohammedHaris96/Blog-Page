import "./Styles/Homepage.css";
import { Card } from "antd";
const { Meta } = Card;

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  // Array of objects for blog
  const blogs = [
    {
      vacationName: "United Kingdom",
      descriptionLondon: "This is my blog for the vacation",
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
            style={{ width: 240, borderRadius: "5px" }}
            cover={<h4>Unexpected trip to United Kingdom</h4>}
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
