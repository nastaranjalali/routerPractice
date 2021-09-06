import {Link} from "react-router-dom";
import data from "../data/data";
import {useState} from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
        const userExists = data.some(item => item.user_namer === username && item.password === password)
        if (userExists) {
            localStorage.token = "ridam to najafi"
            localStorage.setItem("name", data.find(item => item.user_namer === username).first_name)
            localStorage.setItem("gender", data.find(item => item.user_namer === username).gender)
            window.location.reload()
        }
    }

    return (
        <div className={["wrapper", "login"].join(' ')}>
            <form onSubmit={handleSubmit}>
                <div className={"container "}>
                    <input type="text" name="username" placeholder="username"
                           onChange={(event) => setUsername(event.target.value)}
                    />
                    <input type="password" name="password" placeholder="password"
                           onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type="submit">
                        Login
                    </button>
                    <Link to={"/home"}>
                        <button>
                            Home
                        </button>
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Login;
