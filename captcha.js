const getCaptcha = () => {
    let captcha = ""
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const random = () => Math.floor(Math.random() * 62);
    
    for (let i = 0; i < 6; i++) {
        captcha += chars[random()]
    }
    
    document.getElementById("captcha").innerText = captcha
}

getCaptcha()