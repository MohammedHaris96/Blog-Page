import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";

const BlogList = ({ blogs }) => {
  return (
    <>
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
                    <i className="fas fa-plane" style={{ fontSize: "20px" }}></i>
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
    </>
  );
};

export default BlogList;
