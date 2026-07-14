import { useState } from "react";



function Register() {
    const [name, setName] = useState("");

    const [email,setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword]= useState("");

    function handleRegister(){
        console.log("Register")
        
        if (name === "") {
            alert("Name is Required")
            return;
        }
        if (email === "") {
            alert("Email is Required")
            return;
        }
        if (password === "") {
            alert("password is Required")
            return;
        }
        if (confirmPassword === "") {
            alert("confirm ypur Password")
            return;
        }
        if (password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }
         alert("Registration Successful");
    }

    
    return (
        <>

            <h1>Register</h1>

            <input type="name" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

            <button onClick={handleRegister}>Register</button>


               
                
            

        </>
    )
};

export default Register;
