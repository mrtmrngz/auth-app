import {Navigate, Outlet} from "react-router";
import {useSelector} from "react-redux";

const AdminRoutes = () => {

    const { user } = useSelector(state => state.auth)

    if(!user) {
        return <h1>Loding..</h1>
    }

    if(user?.role !== "admin") {
        return <Navigate to="/" replace />
    }

    return <Outlet />
};

export default AdminRoutes;