export const Blogs=()=>{
    const blogs = [
        {
            id : 101,
            title : "React Learning",
            creator : "Stephen Biz",
            desc : "Welcome to learning React!"
        },
        {
            id : 102,
            title : "Installation",
            creator : "Schewzdenier",
            desc : "You can install React from npm."
        }
    ]

    return(
        <div>
            <h2>Blog Details</h2>
            <ul>
            {
                blogs.map((blog)=>{
                    return(
                        <div key={blog.id}>
                            <h3>{blog.title}</h3>
                            <h5>{blog.creator}</h5>
                            <p>{blog.desc}</p>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}