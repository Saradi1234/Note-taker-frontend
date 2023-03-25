import { setUser } from "../store/AppStore"

async function onLoginHandler(formObject, navigateToHome) {
    
    console.log("event occured on:",formObject);

    const email = formObject.email.value;
    const password = formObject.password.value;
    setUser(email)

    const response = await fetch("https://note-taker-backend.onrender.com/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    // console.log(data.token);

    if (data.token) {
        (localStorage.setItem("AUTH_TOKEN", (data.token)))
        navigateToHome("/home")
    } else {
        alert(data.message);
    }
}

export default onLoginHandler