import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import { Button } from "react-bootstrap";

const LoginForm = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const { authenticate, storeToken, error } = useContext(AuthContext);

    const handleInputChange = e => {
        const { value, name } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        authService
            .login(loginData)
            .then(({ data }) => {
                console.log(data);
                storeToken(data.authToken);
                console.log(data.authToken)
                authenticate();
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    const { password, email } = loginData;

    return (
        <form onSubmit={handleSubmit}>
        
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    name="email"
                />
            

        
                <label>Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={handleInputChange}
                    name="password"
                />
            

            <div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link to="/signup">Signup</Link>
            </div>
            <p>{error}</p>
        </form>
    );
};

export default LoginForm;