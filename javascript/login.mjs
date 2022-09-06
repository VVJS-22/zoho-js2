import { validate } from "./validate.mjs";
import { isValidCaptcha } from "./checkCaptcha.mjs";

const form = document.getElementsByTagName("form")["loginForm"];
const submitbtn = document.getElementById("submit")

const login = () => {
    const email = form.email.value
    const password = form.password.value
    let users = JSON.parse(localStorage.getItem("users"))
    const isValidCap = isValidCaptcha();
    if (isValidCap) {
        if (users) { 
            if (users[email]) {
                if (users[email]["password"] === password) {
                    localStorage.setItem("curUser", email)
                    alert("Loged in Successfully!")
                    location.href = "pages/dashboard.html"
                } else {
                    alert("Invalid Credentials.")
                    location.reload()
                }
            } else {
                alert("Invalid Credentials.")
                location.reload()
            }
        } else {
            alert("Oops, you should sign up first.")
            location.href = "signup.html"
        }
    } else {
        alert("Invalid Captcha")
        location.reload()
    }
}

form.addEventListener("input" , validate)
submitbtn.addEventListener("click", login)
