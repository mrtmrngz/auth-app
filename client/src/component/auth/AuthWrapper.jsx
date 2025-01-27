import {useState} from "react";

const AuthWrapper = ({isLogin = false, onSubmit, data, onChange, loading}) => {

    return (
        <div className="auth-wrapper">
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <form onSubmit={onSubmit}>
                {!isLogin && <p className="input-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={onChange} value={data?.username} type="text" id="username" name="username" placeholder="Enter Your Username"/>
                </p>}
                <p className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={onChange} value={data?.email} type="email" id="email" name="email" placeholder="Enter Your Email"/>
                </p>
                <p className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={onChange} value={data?.password} type="password" id="password" name="password" placeholder="Enter Your Password"/>
                </p>
                <div className="button-wrapper">
                    <button disabled={loading} className="btn" type="submit">{isLogin ? "Login" : "Register"}</button>
                </div>
            </form>
        </div>
    );
};

export default AuthWrapper;