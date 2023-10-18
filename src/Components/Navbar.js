import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Dashboard
            </Button>
            <Button color="inherit" onClick={() => navigate("/blog/all")} sx={{ margin: "0 8px" }}>
              Blogs
            </Button>
            <Button color="inherit" onClick={() => navigate("/blog/user")} sx={{ margin: "0 8px" }}>
              UserBlogs
            </Button>
            <Button color="inherit" onClick={() => navigate("/blog/add")} sx={{ margin: "0 8px" }}>
              Add Blogs
            </Button>
            <Button color="inherit" onClick={() => navigate("/user/login")} sx={{ margin: "0 8px" }}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/user/signup")} sx={{ margin: "0 8px" }}>
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};


export const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Button color="inherit" onClick={() => navigate("/blog/all")} sx={{ margin: "0 8px" }}>
              Blogs
            </Button>
            <Button color="inherit" onClick={() => navigate("/blog/user")} sx={{ margin: "0 8px" }}>
              UserBlogs
            </Button>
            <Button color="inherit" onClick={() => navigate("/blog/add")} sx={{ margin: "0 8px" }}>
              Add Blogs
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};