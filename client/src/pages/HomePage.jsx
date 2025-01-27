import {Link, useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {useLogoutMutation} from "../services/authService.js";

const HomePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [logout, {isLoading, error}] = useLogoutMutation()

    const handleLogout = async () => {
        const result = await logout().unwrap()

        if(result) {
            navigate("/auth/login")
        }
    }

    return (
        <div className="container home-page">
            <h1 className="welcome-text">Welcome to auth app 👋👋</h1>
            <div className="home-wrapper">
                <span>Where you want to go?</span>
                <div className="main-routes">
                    <Link className="btn" to="/profile">Profile Page</Link>
                    <Link className="btn" to="/admin">Admin Page</Link>
                    <span>Or</span>
                    <button onClick={handleLogout} className="btn red-btn">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;