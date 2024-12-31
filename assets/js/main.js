

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
  
  // c

  const bannerSlick = document.querySelector('.banner-slick')

  console.log('++')
  console.log(bannerSlick);
  console.log('++')
  