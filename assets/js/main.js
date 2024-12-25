

// Login After Navbar

let itemTopbar = document.querySelectorAll('.loginNav')
let loginAuthBtn =  document.querySelector('.loginAuth')
let topBar = document.getElementById('topbar')
let authBtn = document.querySelector('.auth-buttons')
let customerAccountLogin = document.getElementById('customerAccountLogin')

let customerLogin =  false;

loginAuthBtn.addEventListener('click',(e)=>{
    itemTopbar.forEach((item)=>{
        console.log(item);
        item.classList.remove('hidden')
        
    })
    topBar.classList.add('bg-gradient-p')
    topBar.classList.remove('bg-primary')

    customerAccountLogin.classList.remove('hidden')
    authBtn.classList.add('lg:hidden')

    e.preventDefault()
})
