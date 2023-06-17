import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ title, summary, content, image, author, createdAt }) => {
    return (
        <div className="post">
            <div className="image">
                <Link to={"/post/id"}>
                    <img src={"http://localhost:4000/" + image} alt="" />
                </Link>
            </div>
            <div className="texts">
                <Link to={"/post/id"}>
                    <h2>{title}</h2>
                </Link>
                <p className="info">
                    <span className="author">{author.username}</span>
                    <span className="time">
                        {format(new Date(createdAt), "MMM d, yyyy - HH:mm")}
                    </span>
                </p>
                <p className="summary">{summary}</p>
            </div>
        </div>
    );
};

export default Post;
