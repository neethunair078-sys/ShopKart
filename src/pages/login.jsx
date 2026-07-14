import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



function Login() {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        const getUsers = async() => {
            const response = await axios.get('http://localhost:5000/users')
             setUsers(response.data)

        }

       
        getUsers()

    }, [])



    const  handleLogin = async () => {
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

            if(user.password !== password) {
                toast.error("Incorrect password")
                return 
            } 

            localStorage.setItem("user", JSON.stringify(user));

            toast.success("Login successfully")
            navigate("/")

        } catch(error) {
            console.log(error)
        }
    }



    return (
        <>
            <div className=" w-screen h-screen flex justify-center items-center ">
                <div className="w-150 h-100 bg-blue-50 rounded-2xl flex flex-col justify-center items-center gap-6">
                    <h2 className="font-bold">Login</h2>
                    <input type="email" placeholder="Enter Email"  className="w-80 h-10 bg-white rounded-lg p-2 outline-2 outline-offset-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="Password" placeholder="Enter Password"  className="w-80 h-10 bg-white rounded-lg p-2 outline-2 outline-offset-2"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
};

export default Login;