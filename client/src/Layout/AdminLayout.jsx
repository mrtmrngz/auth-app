import {Link, Outlet, useLocation} from "react-router";

const AdminLayout = () => {

    const {pathname} = useLocation()

    return (
        <div className="admin-layout">
            <div className="admin-header">
                <h3>Welcome Admin 😊😊</h3>
            </div>

            <div className="admin-wrapper">
                <nav className="admin-routes">
                    <ul>
                        <li>
                            <Link className={pathname === "/admin" ? "active" : ""} to="/admin">Dashboard</Link>
                        </li>
                        <li>
                            <Link className={pathname === "/admin/users" ? "active" : ""} to="/admin/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};

export default AdminLayout;