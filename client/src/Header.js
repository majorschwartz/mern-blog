import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;

    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: "include",
        }).then((res) => {
            res.json().then((userInfo) => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST",
        });
        setUserInfo(null);
    }

    return (
        <header>
            <Link to="/" className="logo">
                Blog
            </Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <Link to="/">
                            <a onClick={logout}>Logout</a>
                        </Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
