export class Password {
    static encrypt(password) {
        let encrypted = ""
        password.split("").map(char => {
            let code = char.charCodeAt() + 1
            if (code > 127 || code < 33) {
                alert("Invalid Password")
            } else if (code === 127) {
                code = 32
            }
            const eChar = String.fromCharCode(code)
            encrypted += eChar
        })
        return encrypted
    };

    static decrypt(password) {
        let decrypted = ""
        password.split("").map(char => {
            let code = char.charCodeAt() - 1
            if (code > 125 || code < 31) {
                alert("Invalid Password")
            } else if (code === 31) {
                code = 126
            }
            const eChar = String.fromCharCode(code)
            decrypted += eChar
        })
        return decrypted
    };
}