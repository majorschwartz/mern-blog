import "./App.css";

function App() {
    return (
        <main>
            <header>
                <a href="" className="logo">
                    Blog
                </a>
                <nav>
                    <a href="">Login</a>
                    <a href="">Register</a>
                </nav>
            </header>

            <div className="post">
                <div className="image">
                    <img
                        src="https://www.writingbeginner.com/wp-content/uploads/2023/02/Cartoon-blogger-on-a-laptop-How-to-write-a-blog-post-with-ChatGPT.png"
                        alt=""
                    />
                </div>
                <div className="texts">
                    <h2>How to write a blog post with ChatGPT</h2>
                    <p className="info">
                        <span className="author">Major</span>
                        <span className="time">06-15-2023 10:38</span>
                    </p>
                    <p className="summary">
                        Ever since it was released, I've been experimenting with
                        writing content with ChatGPT. Using my prior knowledge
                        and experience ranking articles written with the help of
                        other premium AI tools (such as Jasper AI), I was able
                        to develop a 21-step workflow.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default App;
