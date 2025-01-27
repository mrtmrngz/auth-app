import {Navigate, Outlet} from "react-router";
import {useUserInfoQuery} from "./services/usersService.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setCredentials} from "./redux/authSlice.js";

const App = () => {

    const {user} = useSelector(state => state.auth)
    const {data, isLoading, isError, isFetching} = useUserInfoQuery()
    const dispatch = useDispatch()

    useEffect(() => {
        if(data && !user) {
            dispatch(setCredentials(data))
        }
    }, [data, user, dispatch])

    if(isLoading || isFetching) {
        return <h1>Loading...</h1>
    }

    if(isError) {
        return <Navigate to="/auth/login" replace />
    }

    return <Outlet />
};

export default App;