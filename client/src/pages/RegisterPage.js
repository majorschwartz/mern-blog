import React from "react";

const RegisterPage = () => {
    return (
        <div className="forms">
            <div className="form-header">Register</div>
            <form className="register">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
