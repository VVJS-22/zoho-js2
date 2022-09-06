const form = document.getElementsByTagName("form")[0];
const submitbtn = document.getElementById("submit")

export const validate = () => {
    const isVaildEmail = form.email.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
    const isValidPassword = form.password.value.length > 7

    const hasCaptcha = form.captcha.value !== ""

    isVaildEmail ? document.getElementById("email-error").classList.add("hide") :document.getElementById("email-error").classList.remove("hide")
    isValidPassword ? document.getElementById("password-error").classList.add("hide") : document.getElementById("password-error").classList.remove("hide")
    const isVaild = isVaildEmail && isValidPassword && hasCaptcha
    isVaild ? submitbtn.removeAttribute("disabled") : submitbtn.setAttribute("disabled" , "")
}