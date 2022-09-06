const getCaptcha = () => {
    let captcha = ""
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const random = () => Math.floor(Math.random() * 62);
    
    for (let i = 0; i < 6; i++) {
        captcha += chars[random()]
    }
    const replaceable = document.querySelector("#captcha");
    replaceable.innerHTML = captcha
    html2canvas(document.querySelector("#captcha")).then(canvas => {
        replaceable.parentElement.replaceChild(canvas, replaceable)
    });
}

getCaptcha()