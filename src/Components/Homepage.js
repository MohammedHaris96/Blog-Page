import "./Styles/Homepage.css";
import { Card } from "antd";
const { Meta } = Card;

// import AuthorImage from "./AuthorImage";
const Homepage = () => {
  // Array of objects for blog
  const blogs = [
    {
      name: "United Kingdom",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      titleUK: "Vacation",
    },

    {
      name: "United Kingdom",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      titleUK: "Vacation",
    },

    {
      name: "Australia",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      title: "Vacation",
    },

    {
      name: "America",
      description:
        "This is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacationThis is my blog for the vacation",
      title: "Vacation",
    },
  ];

  return (
    <>
      <div className="homepage-container  ">
        <h1>The blog page</h1>

        <div className="blog-card d-flex justify-content-center ">
          {blogs.map((blog) => {
            return (
              <Card
                hoverable
                style={{
                  width: 400,
                  borderRadius: "15px/45px",
                  margin: "10px",
                }}
                cover={
                  <>
                    <div className="d-flex justify-content-center align-items-center">
                      <span>
                        <i
                          class="fas fa-plane"
                          style={{ fontSize: "20px" }}
                        ></i>
                      </span>
                      <h4 style={{ margin: "5px" }}>Visit to United Kingdom</h4>
                    </div>
                  </>
                }
              >
                <Meta title={blog.name} description={blog.description} />
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
