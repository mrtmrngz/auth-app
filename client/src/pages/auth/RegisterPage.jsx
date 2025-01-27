import AuthWrapper from "../../component/auth/AuthWrapper.jsx";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useRegisterMutation} from "../../services/authService.js";
import {useNavigate} from "react-router";

const RegisterPage = () => {
    const [datas, setDatas] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [register, {isLoading, isError, error}] = useRegisterMutation()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setDatas(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await register(datas).unwrap()

        if (result) {
            navigate("/auth/login")
        }
    }

    return <div className="auth-page">
        {error && error.status === 403 && <h3 className="error-message">{error.data.error}</h3>}
        <AuthWrapper loading={isLoading} onSubmit={handleSubmit} onChange={handleChange} data={setDatas}/>
    </div>
};

export default RegisterPage;