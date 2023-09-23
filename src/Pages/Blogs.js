import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { getAllBlogs } from "../Services/blogs";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

export const Blogs = () => {
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Invalid Authorization");
    } else {
      handleBlogs();
    }
  }, []);

  const handleBlogs = async (token) => {
    getAllBlogs(token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setBlogs(data.data);
      }
    });
  };

  return (
    <div>
      <Navbar />
      <BlogCards blogs={blogs} />
      {error ? <div className="err-msg">{error}</div> : ""}
    </div>
  );
};

function BlogCards({ blogs }) {
  return (
    <div>
      {blogs && (
        <div>
          {blogs?.map((blog) => (
            <Card sx={{ maxWidth: 345, margin: "0 0 20px" }} key={blog._id}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.blog}
                  </Typography>
                  <Typography variant="body2">posted on {blog.date}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
