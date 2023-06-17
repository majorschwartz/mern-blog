import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
    return (
        <form className="create-post">
            <input type="title" placeholder={"Title"} />
            <input type="summary" placeholder={"Summary"} />
            <input type="file" />
            <ReactQuill />
            <button className="post-submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
