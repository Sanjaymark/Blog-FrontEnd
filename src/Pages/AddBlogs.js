import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Button, TextField } from "@mui/material";
import { addBlog } from "../Services/blogs";

export const AddBlogs = () =>{
    const [title,setTitle] = useState("");
    const [blog,setBlog] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleAddBlog = async ()=>{
        const token = localStorage.getItem("token");

        console.log(token);

        if(!token)
        {
            SetError("Invalid Authorization");
        }
        else
        {
            const payload = {title,blog };
            console.log(payload);
            addBlog(payload).then((data) =>
            {
                if(data.error)
                {
                    SetError(data.error);
                    setSuccessMsg("");
                    setBlog("")
                    setTitle("")
                }
                else{
                    setSuccessMsg(data.message);
                    SetError("")
                    setBlog("")
                    setTitle("")
                }
            })
        }
    }

    return (
    <div>
        <Navbar/>
        <BlogForm 
            title={title}
            setTitle={setTitle}
            blog={blog}
            setBlog={setBlog}
            handleAddBlog={handleAddBlog}
        />
        {error ? <div className="err-msg">{error}</div> : ""}
        {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
    </div>)
};

function BlogForm({title,blog,setTitle,setBlog, handleAddBlog})
{
    return(
        <form className="forms">
            <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <TextField id="outlined-basic" label="Blog" variant="outlined" value={blog} onChange={(e)=>setBlog(e.target.value)} />
            <Button variant="contained" onClick={() => handleAddBlog()}>Add Blog</Button>
        </form>
    )
}