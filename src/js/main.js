let toggleBtn = document.querySelector('.toggle')
let theme = localStorage.getItem('theme')
if (theme == "dark") {
    document.documentElement.classList.add('dark')
}
toggleBtn.addEventListener('change' , ()=>{
    if (theme == "light") {
        theme="dark"
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme' , theme)
    }else{
        theme="light"
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme' , theme)
    }
})