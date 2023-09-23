import { API } from "./api.js";


export async function getAllBlogs()
{
    const res = await fetch(`${API}/blog/all`,
    {
        method:"GET",
        headers:{
            "x-auth-token":localStorage.getItem("token"),
        }
    });

    const data = res.json();
    return data;
}

export async function addBlog(payload)
{
    const res = await fetch(`${API}/blog/add`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
    })
    const data = await res.json();
    return data;
}

export async function getUserBlogs()
{
    const res = await fetch(`${API}/blog/user`,
    {
        method:"GET",
        headers:{
            "x-auth-token":localStorage.getItem("token"),
        }
    });

    const data = await res.json();
    console.log(data)
    return data;
}


  
export async function deleteBlog(blogId) {
    try {
      const res = await fetch(`${API}/blog/${blogId}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
  
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete blog");
    }
  }
  