import { useState } from "react";



function Register() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    function handleRegister() {
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
        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return;
        }
        alert("Registration Successful");
    }


    return (

        <>

            <div className="min-h-screen bg-gray-100">


                <div className="flex justify-center">

                    <div>
                        <h1 className="text-5xl font-bold mb-4">
                            Create Account
                        </h1>

                        <p className="text-gray-500 text-xl mb-10">
                            Register to enjoy a seamless shopping experience.
                        </p>
                    </div>


                    <div>
                        <div className="bg-white shadow-xl rounded-2xl p-12">
                            <h1>Register</h1>
                            <label className="font-semibold">Full Name</label>
                            <input type="name" placeholder="Enter Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
                            <label className="font-semibold">Email</label>
                            <input type="email" placeholder="Enter Email" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className="font-semibold">Password</label>
                            <input type="password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className="font-semibold">Confirm Password</label>
                            <input type="password" placeholder="Enter Password" className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition" onClick={handleRegister}>Register</button>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-6">Already have an account?
                    <span className="text-blue-600 cursor-pointer ml-2">
                        Login
                    </span>
                </p>
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
