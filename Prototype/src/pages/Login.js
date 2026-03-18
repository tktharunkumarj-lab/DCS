import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // fake login for now
        localStorage.setItem("user", "loggedIn");

        navigate("/dashboard");
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;