import React, { useState } from "react";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function register(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.status === 200) {
            alert("Registration successful.");
        } else {
            alert("Registration failed.");
        }
    }

    return (
        <div className="forms">
            <div className="form-header">Register</div>
            <form className="register" onSubmit={register}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
