import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Button, TextField } from "@mui/material";
import { handleLogin } from "../Services/auth";

export const Login = () =>{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    

    const loginUser = async () =>{
        const payload = {name,email,password};

        

        handleLogin(payload).then((data)=>
        {
            if(data.error)
            {
                SetError(data.error);
                setSuccessMsg("")
            }
            else
            {
                SetError("")
                setSuccessMsg(data.message);
                localStorage.setItem("token", data.token);
                
            }
        })
    }

    return (
        <div>
            <Navbar/>
            <LoginForm
            name={name}
            SetName={SetName}
            email={email}
            SetEmail={SetEmail}
            password={password}
            SetPassword={SetPassword}
            loginUser={loginUser}
        />
        {error ? <div className="err-msg">{error}</div> : ""}
        {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
        </div>
    )
};

function LoginForm({name,SetName,email, SetEmail,password, SetPassword, loginUser})
{
    return(
        <form className="forms">
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>SetName(e.target.value)} />
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <Button variant="contained" onClick={()=> loginUser() }>Login</Button>
        </form>
    )
}