if (!localStorage.getItem("curUser")) {
    location.href = "/index.html"
}

const logout = () => {
    localStorage.removeItem('curUser')
    location.href = '/index.html'
}