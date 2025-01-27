import AuthWrapper from "../../component/auth/AuthWrapper.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {useLoginMutation} from "../../services/authService.js";

const LoginPage = () => {
    const [datas, setDatas] = useState({
        email: "",
        password: ""
    })

    const [login, {isLoading, error}] = useLoginMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setDatas(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await login(datas).unwrap()

        if(result) {
            window.location.href = "/"
        }
    }

    return <div className="auth-page">
        {error && error.status === 404 && <h3 className="error-message">{error.data.error}</h3>}
        <AuthWrapper loading={isLoading} isLogin onSubmit={handleSubmit} onChange={handleChange} data={setDatas}/>
    </div>
};

export default LoginPage;