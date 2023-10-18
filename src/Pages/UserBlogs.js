import React, { useEffect, useState } from "react";
import { Navbar2 } from "../Components/Navbar";
import { Card, CardActionArea, CardContent, Typography, Button } from "@mui/material";
import { getUserBlogs, deleteBlog } from "../Services/blogs";

export const UserBlogs = () => {
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Invalid Authorization");
    } else {
      handleBlogs();
    }
  }, []);

  const handleBlogs = async () => {
    getUserBlogs()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          setBlogs(data);
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch blogs");
      });
  };

  const handleDeleteBlog = async (blogId) => {
    deleteBlog(blogId)
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setError("");
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to delete blog");
      });
  };

  return (
    <div>
      <Navbar2 />
      <UserBlogCards
        blogs={blogs}
        onDeleteClick={handleDeleteBlog}
      />
      {error ? <div className="err-msg">{error}</div> : ""}
    </div>
  );
};

function UserBlogCards({ blogs, onDeleteClick }) {
  return (
    <div>
      {blogs && (
        <div>
          {blogs?.map((blog) => (
            <Card sx={{ maxWidth: 345 }} key={blog._id}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.blog}
                  </Typography>
                  <Typography variant="body2">Posted on {blog.date}</Typography>
                </CardContent>
              </CardActionArea>
              <div className="card-buttons button">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDeleteClick(blog._id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
