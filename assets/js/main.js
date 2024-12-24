

// Preloader
let PreloaderDiv = document.getElementById("preloader");
window.onload = () => {
    setTimeout(()=>{
        PreloaderDiv.classList.add("hidden-load")
    },2000)
};

// Sub menu

let subMenu = document.querySelectorAll('.submenu')

subMenu.forEach(item =>{
item.addEventListener('click',()=>{
    item.classList.toggle('active')
})
})

// menu bar

let menuBtn = document.getElementById('menuBtn')
let sideMenu = document.getElementById('sidemenu')
let closeMenu = document.querySelectorAll('.close-menu')
let menuOverlay = document.getElementById('menu-overlay')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.right = 0
    menuOverlay.classList.remove('hidden')

})
closeMenu.forEach(item=>{
    item.addEventListener('click',()=>{
        sideMenu.style.right = '-700px'
        menuOverlay.classList.add('hidden')
    
    })
})
