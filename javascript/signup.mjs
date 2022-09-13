import { User } from "./User.mjs";
import { validate } from "./validate.mjs";
import { isValidCaptcha } from "./checkCaptcha.mjs";
import { Password } from "./password.mjs";

const form = document.getElementsByTagName("form")["signupForm"];
const submitbtn = document.getElementById("submit")



const signup = () => {
    const email = form.email.value
    const password = form.password.value
    
    const newuser = new User(email, Password.encrypt(password));
    let users = JSON.parse(localStorage.getItem("users"))
    const isValidCap = isValidCaptcha();
    if (isValidCap) {
        if (users) { 
            if (!users[email]) {
                users[email] = newuser
                localStorage.setItem("users", JSON.stringify(users))
                alert("Signed up successfully!.")
                location.href = "/index.html"
            } else {
                alert("User already exists")
                location.reload()
            }
        } else {
            users = {
                [email]: newuser
            }
            localStorage.setItem("users", JSON.stringify(users))
            alert("Signed up successfully!.")
            location.href = "/index.html"
        }
    } else {
        alert("Invalid Captcha")
        location.reload()
    }
}

form.addEventListener("input" , validate)
submitbtn.addEventListener("click", signup)
