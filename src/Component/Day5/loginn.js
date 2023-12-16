export default function App(){
    return(
        <div>
            <BrowserRouter>
            <ul>
                <li>
                    <Link to = "/login">Login page</Link>
                </li>
                <li>
                    <Link to = "/signup">Signup</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/login" element=<loginn/> ></Route>
                <Route path="/signup" element=<signupp/> ></Route>
            </Routes> 
            </BrowserRouter>
        </div>
    )
}