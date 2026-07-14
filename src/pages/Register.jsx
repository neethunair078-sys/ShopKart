import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";



function Register() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        // console.log("Register")



        const existingUser = await axios.get(
            `http://localhost:5000/users?email=${email}`
        );

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
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return;
        }

        const user = {
            name,
            email,
            password
        };

        try {
            await axios.post("http://localhost:5000/users", user);
            toast.success("Registration Successful")
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>

            <h1>Register</h1>

            <input type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

            <button onClick={handleRegister}>Register</button>






        </>
    )
};

export default Register;
