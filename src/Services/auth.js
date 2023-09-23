import { API } from "./api.js"

export async function handleSignup(payload)
{
    const response = await fetch(`${API}/user/signup`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


export async function handleLogin(payload)
{
    const response = await fetch(`${API}/user/login`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}