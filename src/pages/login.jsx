import { useState } from "react";



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        if (email === "") {
            alert("Email is Required");
            return;
        }

        if (password === "") {
            alert("Password is Required");
            return;
        }

        alert("Validation Successful");
    }



    return (
        <>
            <div className=" w-screen h-screen flex justify-center items-center ">
                <div className="w-150 h-100 bg-blue-50 rounded-2xl flex flex-col justify-center items-center gap-6">
                    <h2 className="font-bold">Login</h2>
                    <input className="" type="email" placeholder="Enter Email"  className="w-80 h-10 bg-white rounded-lg p-2 outline-2 outline-offset-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="Password" placeholder="Enter Password"  className="w-80 h-10 bg-white rounded-lg p-2 outline-2 outline-offset-2"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
};

export default Login;