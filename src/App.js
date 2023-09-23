import {Route, Routes} from "react-router-dom";
import './App.css';
import { Dashboard } from "./Pages/Dashboard";
import { Blogs } from "./Pages/Blogs";
import { AddBlogs } from "./Pages/AddBlogs";
import { UserBlogs } from "./Pages/UserBlogs";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";





function App() 
{
  return (
        
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/blog/all" element={<Blogs/>} />
          <Route exact path="/blog/user" element={<UserBlogs/>} />
          <Route exact path="/blog/add" element={<AddBlogs/>} />
          <Route exact path="/user/login" element={<Login/>} />
          <Route exact path="/user/signup" element={<Signup/>} />
        </Routes>
      </div>
  ); 
}


export default App;







