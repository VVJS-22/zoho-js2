export const isValidCaptcha = () => {
    console.log(captcha)
    const captchaInput = document.getElementById("captcha-input").value
    if (captcha === captchaInput) {
        return true
    }
    
    return false
}