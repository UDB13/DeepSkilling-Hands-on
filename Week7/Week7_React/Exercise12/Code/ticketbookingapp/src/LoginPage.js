export const LoginPage=({onLogout})=>{
    return(
        <div>
            <h2>Welcome back</h2>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}