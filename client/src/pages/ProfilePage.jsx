import {Link, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useLogoutMutation} from "../services/authService.js";

const ProfilePage = () => {

    const { user } = useSelector(state => state.auth)
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
        <div className="container profile-page">
            <h1 className="welcome-text">Profile</h1>

            <div className="profile-page-wrapper">
                <div className="profile-info">
                    <div className="info-item">
                        <h4>Username: </h4>
                        <span>{user?.username}</span>
                    </div>
                    <div className="info-item">
                        <h4>Email: </h4>
                        <span>{user?.email}</span>
                    </div>
                </div>
                <div className="routes-wrapper">
                    <span>Where you want to go?</span>
                    <div className="main-routes">
                        <Link className="btn" to="/">Home Page</Link>
                        <Link className="btn" to="/admin">Admin Page</Link>
                        <span>Or</span>
                        <button onClick={handleLogout} className="btn red-btn">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;