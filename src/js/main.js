let toggleBtn = document.querySelector('.toggle')
let theme = "light"
toggleBtn.addEventListener('change' , ()=>{
    if (theme == "light") {
        theme="dark"
        document.documentElement.classList.add('dark')
    }else{
        theme="light"
        document.documentElement.classList.remove('dark')
    }
})