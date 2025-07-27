import React from "react";
import Post from "./Post";

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {post : [],
    };
}
    
    loadPosts=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((data) => {
            const postList = data.map((item) => new Post(item.id, item.title, item.body));
            this.setState({ post : postList });
        })
        .catch((error) => {
            console.error("Error fetching posts : ", error);
            alert("Failed to load posts!");
        });
    }

    componentDidMount(){
        this.loadPosts();
    }

    render(){
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.post.map((post) => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }

    componentDidCatch(error, info){
        alert("An error occured : " + error);
    }
}


export default Posts;