export const Books=()=>{
    const books = [
        {
            id : 101,
            title : "Master React",
            prize : 670
        },
        {
            id : 102,
            title : "Deep Dive into Angular 11",
            prize : 800
        },
        {
            id : 103,
            title : "Mongo Essentials",
            prize : 450
        }
    ]

    return(
        <div>
            <h2>Book Details</h2>
            <ul>
            {
                books.map((book)=>{
                    return(
                        <div key={book.id}>
                            <h4>{book.title}</h4>
                            <h5>{book.prize}</h5>
                        </div>
                    )
                })
            }
            </ul>
        </div>
    )
}