"use strict";

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

// logo marquee
document.addEventListener("DOMContentLoaded", () => {
    const teamScroll = document.querySelector(".team-scroll");
  
    const cloneItems = () => {
      const items = Array.from(teamScroll.children);
      const totalWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
      const visibleWidth = teamScroll.parentElement.offsetWidth;
  
      if (totalWidth < visibleWidth * 2) {
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          teamScroll.appendChild(clone);
        });
        cloneItems(); 
      }
    };
  
    cloneItems();
  
    let scrollPosition = 0;
    const scrollSpeed = 1; 
  
    const scrollMarquee = () => {
      scrollPosition -= scrollSpeed;
      if (Math.abs(scrollPosition) >= teamScroll.scrollWidth / 2) {
        scrollPosition = 0;
      }
      teamScroll.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(scrollMarquee);
    };
  
    scrollMarquee();
  });
  
//   Youtube Video JS

function playVideo(thumbnail) {
    const videoDiv = thumbnail.nextElementSibling;
    const thumbnailDiv = thumbnail;
  
    // Show the iframe video and hide the thumbnail
    videoDiv.style.display = "block";
    thumbnailDiv.style.display = "none";
  }
  
// image zoom modal

// Function to show the modal
function showModal() {
  const modal = document.getElementById('modal01');
  modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById('modal01');
  modal.style.display = 'none';
}

// Bid Dropdown 
document.addEventListener("DOMContentLoaded", () => {
const bidBtn = document.querySelector('.bid-dropdown-btn');
const bidDropdown = document.querySelector('.bid-dropdown');

let bidDrop = false;

bidBtn.addEventListener('click', () => {
  bidDrop = !bidDrop; 
  console.log(bidDrop);
  
  if (bidDrop) {
    console.log(bidDrop);
    bidDropdown.classList.remove('hidden');
    bidDropdown.classList.add('show');
    bidBtn.classList.add('active')
  } else {
    console.log(bidDrop);
    bidDropdown.classList.remove('show');
    bidDropdown.classList.add('hidden');
    bidBtn.classList.remove('active')
  }
});
});

// Login Progress Js
document.addEventListener("DOMContentLoaded", () => {
const registerForm = document.querySelector('.r-form-a')
const verificationCode = document.querySelector('.v-form')
const ProgressBar = document.querySelectorAll('.progress-status')
const documentUpload = document.querySelector('.document-form')

const registerBtn = document.querySelector('#register-user')
const verifyCodeBtn = document.getElementById('verifyCode-btn')
let progressCount = 1

registerBtn.addEventListener('click', (e,progressCount)=>{
  registerForm.classList.add('hidden')
  verificationCode.classList.remove('hidden')
  console.log(e)
  ProgressBar.forEach((item,e)=>{
    if(item.id == 'step2'){
      item.classList.add('active')
    }
    console.log(item,item.id)
  })
 
})
verifyCodeBtn.addEventListener('click',()=>{
  verificationCode.classList.add('hidden');
  documentUpload.classList.remove('hidden')
  ProgressBar.forEach((item,e)=>{
    if(item.id == 'step3'){
      item.classList.add('active')
    }
    console.log(item,item.id)
  })
})
});    