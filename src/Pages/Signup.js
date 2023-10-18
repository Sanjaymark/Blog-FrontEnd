import React, { useState } from "react";
import {Navbar} from "../Components/Navbar"
import { Button, TextField } from "@mui/material";
import { handleSignup } from "../Services/auth";
import { useNavigate } from "react-router-dom";

export const Signup = () =>{
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [contact, SetContact] = useState("");
    const [password, SetPassword] = useState("");
    const [error, SetError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const Navigate = useNavigate();

    const signupUser = async () =>{
        const payload = {name,email,contact,password};

        handleSignup(payload).then((data)=>
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
                Navigate("/blog/all")
                
            }
        })
    }

    return (
    <div>
        <Navbar/>
        <SignupForm
            name={name}
            SetName={SetName}
            email={email}
            SetEmail={SetEmail}
            password={password}
            SetPassword={SetPassword}
            contact={contact}
            SetContact={SetContact}
            signupUser={signupUser}
        />
        {error ? <div className="err-msg">{error}</div> : ""}
        {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
    </div>)
};

function SignupForm({name,SetName,email, SetEmail,contact, SetContact,password, SetPassword, signupUser})
{
    return(
        <form className="forms">
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>SetName(e.target.value)} />
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Contact" variant="outlined" value={contact} onChange={(e)=>SetContact(e.target.value)}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <Button variant="contained" onClick={()=> signupUser() }>SignUp</Button>
        </form>
    )
}