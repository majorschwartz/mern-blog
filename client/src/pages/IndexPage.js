import React, { useEffect, useState } from "react";
import Post from "../Post";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/post").then((res) => {
            res.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
            {posts.length == 0 && <div>There are no posts. Sign in and be the first to post!</div>}
        </>
    );
};
 
export default IndexPage;