export const onSignupHandler = async (formObject, navigateToLogin) => {
   
    const email = formObject.email.value;
    const password = formObject.password.value;
    const confPassword = formObject.conf_password.value;
    if (password !== confPassword) {
        alert("Confirm Password didnot match")
        return
    }
    const response = await fetch("https://note-taker-backend.onrender.com/signup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    console.log(data.message);

    if (data.user) {
        navigateToLogin("/")
    }
    console.log(data);
}