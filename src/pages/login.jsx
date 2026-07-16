import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/Login.png";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaEye } from "react-icons/fa";


function Login() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate()

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:5000/users')
            setUsers(response.data)
        }
        getUsers()

    }, [])



    const handleLogin = async () => {
        if (email === "") {
            toast.error("Email is Required");
            return;
        }

        if (password === "") {
            toast.error("Password is Required");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/users?email=${email}`)

            if (response.data.length === 0) {
                toast.error("User not found")
                return
            }

            const user = response.data[0]

            if (user.password !== password) {
                toast.error("Incorrect password")
                return
            }

            localStorage.setItem("user", JSON.stringify(user));

            toast.success("Login successfully")
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className="min-h-screen flex">
                <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
                    <h1 className="text-5xl font-bold">Welcome Back</h1>

                    <p className="text-gray-500 mt-4">
                        Login to continue shopping.
                    </p>

                    <img src={loginImage} alt="login.png" className="w-96 mt-8" />
                </div>
                <div className="w-1/2 flex justify-center items-center bg-white">

                    <div className="w-[450px] shadow-lg rounded-xl p-8">

                        <h1 className="text-3xl font-bold mb-6">  Login </h1>
                        <input type="email" placeholder="  Enter Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500 p-20" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label className="font-semibold">Password</label>
                        <input type="Password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg" onClick={handleLogin}>Login</button>
                        <p className="text-center mt-6">Don't have an account?
                            <span className="text-blue-600 cursor-pointer ml-2">
                                <Link to="/register">Register</Link>
                            </span>
                        </p>

                    </div>
                </div>
            </div>

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

        </>
    )
};

export default Login;