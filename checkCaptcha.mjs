export const isValidCaptcha = () => {
    const captcha = document.getElementById("captcha").innerText
    const captchaInput = document.getElementById("captcha-input").value
    if (captcha === captchaInput) {
        return true
    }
    
    return false
}