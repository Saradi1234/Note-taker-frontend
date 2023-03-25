import onLoginHandler from "../utils/onLoginHandler"
import { Link, useNavigate } from "react-router-dom"
import "../style/login.css"

const Login = () => {
    const navigateToHome = useNavigate()
    return (
        <div className="container">
            <form onSubmit={(event) => {
                event.preventDefault()
                onLoginHandler(event.target, navigateToHome)
            }}>
                <h1 >Login</h1>
                <div className="input-control">
                    <label htmlFor="email">Email address : </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-control">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">&nbsp;&nbsp;Remember me </label>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
                <br/>
                <Link to="/signup" >New User? Register here</Link>
            </form>
            
        </div>
    )
}

export default Login