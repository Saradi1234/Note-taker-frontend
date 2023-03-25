import { Link, useNavigate } from "react-router-dom"
import { onSignupHandler } from "../utils/onSignupHandler"
import "../style/signup.css"

const Signup = () => {
    const navigateToLogin = useNavigate()
    return (
        <div className="container">
            <form onSubmit={(event) => {
                event.preventDefault()
                onSignupHandler(event.target, navigateToLogin)
            }}>

                <h1>Signup</h1>
                <div className="input-control">
                    <label>Email : </label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-control">
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="input-control">
                    <label htmlFor="conf_password">Confirm Password : </label>
                    <input type="password" name="conf_password" id="conf_password" />
                </div>
                <div>
                <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">&nbsp;&nbsp;I agree with <u>TERMS & CONDITIONS</u> </label>
                </div>
                <div>
                    <button type="submit" >Continue</button>
                </div>
                <br/>
                <Link to="/">Already Registered? Login here </Link>
            </form>
            
        </div>
    )
}

export default Signup