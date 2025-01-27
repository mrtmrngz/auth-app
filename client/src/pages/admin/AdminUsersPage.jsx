import {useGetAllUsersQuery} from "../../services/usersService.js";
import {Navigate} from "react-router";

const AdminUsersPage = () => {

    const {data, isLoading, isFetching, isError} = useGetAllUsersQuery()

    if(isLoading || isFetching) {
        return <h1>Loading...</h1>
    }

    if(isError) {
        return <Navigate to="/" replace />
    }

    const createdAtFormat = (date) => {
        const dateOptions = {year: 'numeric', month: "long", day: 'numeric'}
        const hourOptions = {hour: '2-digit', minute: "2-digit", second: '2-digit'}

        const formattedDate = new Date(date).toLocaleDateString('en-US', dateOptions)
        const formattedHour = new Date(date).toLocaleTimeString('en-US', hourOptions)

        return `${formattedDate} ${formattedHour}`
    }

    return (
        <div className="admin-users-page">
            <table>
                <thead>
                <tr>
                    <th style={{width: "20%"}}>Username</th>
                    <th style={{width: "25%"}}>Email</th>
                    <th style={{width: "15%"}}>Role</th>
                    <th style={{width: "20%"}}>Created At</th>
                    <th style={{width: "20%"}}>Action</th>
                </tr>
                </thead>

                <tbody>
                {data && data.map(user => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td style={{textTransform: 'capitalize', textAlign: 'center'}}>{user.role}</td>
                        <td>
                            <span className="createdAt-date">{createdAtFormat(user.createdAt)}</span>
                        </td>
                        <td>
                            <div className="delete-user-td">
                                <button className="delete-user-btn">Delete User</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminUsersPage;