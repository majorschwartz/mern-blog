import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";

const PostPage = () => {
    const [postInfo, setPostInfo] = useState(null);
    const { UserInfo } = useContext(UserContext);
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((res) => {
            res.json().then((postInfo) => {
                setPostInfo(postInfo);
            });
        });
    }, []);

    if (!postInfo) return;

    return (
        <div className="post-page">
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.image}`} alt="" />
            </div>
            <div className="pre-content">
                <h1 className="title">{postInfo.title}</h1>
                <div className="meta-info">
                    <span className="user">{postInfo.author.username}</span>
                    <span className="date">{format(new Date(postInfo.createdAt), "MMM d, yyyy - HH:mm")}</span>
                    </div>
                <p className="summary">{postInfo.summary}</p>
            </div>
            <div
                className="content"
                dangerouslySetInnerHTML={{ __html: postInfo.content }}
            />
        </div>
    );
};

export default PostPage;
