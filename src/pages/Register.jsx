import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import registerImage from "../assets/Register_1.png";
import { Link } from "react-router-dom";



function Register() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    function validatePassword(password) {
         if (password.length < 8) {
            return "Password must be at least 8 characters.";
        }

        if (!password.match(/[A-Z]/)) {
            return "Password must contain at least one uppercase letter.";
        }

        if (!password.match(/[a-z]/)) {
         return "Password must contain at least one lowercase letter.";
         }

         if (!password.match(/[0-9]/)) {
         return "Password must contain at least one number.";
         }

        return "";
        }

    const handleRegister = async () => {

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

        validatePassword()
        
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

            <div className="min-h-screen min-e-screen bg-gray-100 rounded-md">


                <div className="flex justify-center">

                    <div className="w-1/2 flex flex-col justify-center items-center p-10">
                        <h1 className="text-6xl font-bold mb-4"> Create Account  </h1>
                        <p className="text-gray-500 text-2xl mt-4">
                            Register to enjoy a seamless shopping experience.
                        </p>
                        <img src={registerImage} alt="Register_1" className="w-96" object-contain opacity-95 drop-shadow-xl hover:scale-105  />
                    </div>


                    <div className="w-1/2 flex flex-col justify-center items-center p-10">
                        <div className=" bg-white shadow-xl rounded-2xl p-12">
                            <h1 className="text-3xl font-bold mb-4 p-6 align-content:center">Register</h1>
                            <label className="font-semibold">Full Name</label>
                            <input type="name" placeholder="Enter Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
                            <label className="font-semibold">Email</label>
                            <input type="email" placeholder="Enter Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className="font-semibold">Password</label>
                            <input type="password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className="font-semibold">Confirm Password</label>
                            <input type="password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition" onClick={handleRegister}>Register</button>
                            <p className="text-center mt-6">Already have an account?
                                <span className="text-blue-600 cursor-pointer ml-2">
                                    <Link to="/login">Login</Link>
                                </span>
                            </p>
                        </div>

                    </div>
                </div>


                <div>
                    <div className="grid md:grid-cols-3 gap-10 bg-white mt-16 py-8 shadow">

                        <div className="text-center">
                            <h3 className="font-bold text-lg">
                                Secure Shopping
                            </h3>
                            <p className="text-gray-500">
                                100% secure and protected
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-bold text-lg">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-500">
                                Get your products quickly
                            </p>
                        </div>

                        <div className="text-center">
                            <h3 className="font-bold text-lg">
                                24/7 Support
                            </h3>
                            <p className="text-gray-500">
                                We're here anytime
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
};

export default Register;
