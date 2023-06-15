import React from "react";

const LoginPage = () => {
    return (
        <div className="forms">
            <div className="form-header">Login</div>
            <form className="login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
