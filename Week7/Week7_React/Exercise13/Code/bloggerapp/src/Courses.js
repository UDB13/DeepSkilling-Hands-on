export const Courses=()=>{
    const courses = [
        {
            id : 101,
            title : "Angular",
            date : "4/5/2021"
        },
        {
            id : 102,
            title : "React",
            date : "6/3/2021"
        }
    ]

    return(
        <div>
            <h2>Course Details</h2>
            <ul>
            {
                courses.map((course)=>{
                    return(
                        <div key={course.id}>
                            <h4>{course.title}</h4>
                            <h5>{course.date}</h5>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}