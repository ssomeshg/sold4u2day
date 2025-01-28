"use strict";

// Menu Bar
const menuBar = document.getElementById("menu-bar");
const burgerMenu = document.querySelector(".menu-burger");
const menu = document.querySelector(".main-menubar");
const navitem = document.querySelectorAll(".nav-item");

document.addEventListener("DOMContentLoaded", () => {
  menuBar.addEventListener("click", (e) => {
    const mb = burgerMenu.classList.value;
    if (!mb.includes("active")) {
      burgerMenu.classList.add("active");
      menu.classList.add("active");
    } else {
      burgerMenu.classList.remove("active");
      menu.classList.remove("active");
    }
    e.preventDefault();
  });
  navitem.forEach((item) => {
    item.addEventListener("click", (e) => {
      item.classList.toggle("active");
      e.preventDefault();
    });
  });
});
// NavBar Sticky
const navBar = document.querySelector(".navbar-div");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navBar.classList.add("fixed");
    } else {
      navBar.classList.remove("fixed");
    }
  });
});

// Login After Navbar

let itemTopbar = document.querySelectorAll(".loginNav");
let loginAuthBtn = document.querySelector(".loginAuth");
let topBar = document.getElementById("topbar");
let authBtn = document.querySelector(".auth-buttons");
let customerAccountLogin = document.getElementById("customerAccountLogin");

let customerLogin = false;

loginAuthBtn.addEventListener("click", (e) => {
  itemTopbar.forEach((item) => {
    console.log(item);
    item.classList.remove("hidden");
  });
  topBar.classList.add("bg-gradient-p");
  topBar.classList.remove("bg-primary");

  customerAccountLogin.classList.remove("hidden");
  authBtn.classList.add("lg:hidden");

  e.preventDefault();
});

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
// property Details Read more
const readMore = document.querySelector('.read-more')
document.addEventListener("DOMContentLoaded",()=>{

  readMore.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const moreText = document.querySelector('.more-text');
    const readMoreLink = e.target;
  
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'inline'; // Show the additional text
      readMoreLink.textContent = 'Read less'; // Change link text
    } else {
      moreText.style.display = 'none'; // Hide the additional text
      readMoreLink.textContent = 'Read more'; // Reset link text
    }
  });
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
  const modal = document.getElementById("modal01");
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById("modal01");
  modal.style.display = "none";
}

// Bid Dropdown
document.addEventListener("DOMContentLoaded", () => {
  const bidBtn = document.querySelector(".bid-dropdown-btn");
  const bidDropdown = document.querySelector(".bid-dropdown");

  let bidDrop = false;

  bidBtn.addEventListener("click", () => {
    bidDrop = !bidDrop;
    console.log(bidDrop);

    if (bidDrop) {
      console.log(bidDrop);
      bidDropdown.classList.remove("hidden");
      bidDropdown.classList.add("show");
      bidBtn.classList.add("active");
    } else {
      console.log(bidDrop);
      bidDropdown.classList.remove("show");
      bidDropdown.classList.add("hidden");
      bidBtn.classList.remove("active");
    }
  });
});

// Login Progress Js
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector(".r-form-a");
  const verificationCode = document.querySelector(".v-form");
  const ProgressBar = document.querySelectorAll(".progress-status");
  const documentUpload = document.querySelector(".document-form");

  const registerBtn = document.querySelector("#register-user");
  const verifyCodeBtn = document.getElementById("verifyCode-btn");
  let progressCount = 1;

  registerBtn.addEventListener("click", (e, progressCount) => {
    registerForm.classList.add("hidden");
    verificationCode.classList.remove("hidden");
    console.log(e);
    ProgressBar.forEach((item, e) => {
      if (item.id == "step2") {
        item.classList.add("active");
      }
      console.log(item, item.id);
    });
  });
  verifyCodeBtn.addEventListener("click", () => {
    verificationCode.classList.add("hidden");
    documentUpload.classList.remove("hidden");
    ProgressBar.forEach((item, e) => {
      if (item.id == "step3") {
        item.classList.add("active");
      }
      console.log(item, item.id);
    });
  });
});

// live auction lots animation
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".auction-tabs li");
  const glider = document.querySelector(".glider");

  const updateGlider = (activeTab) => {
    const tabWidth = activeTab.offsetWidth;
    const tabLeft = activeTab.offsetLeft;

    glider.style.width = `${tabWidth}px`;
    glider.style.transform = `translateX(${tabLeft}px)`;
  };

  const initialActiveTab = document.querySelector(".auction-tabs li.active");
  if (initialActiveTab) updateGlider(initialActiveTab);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      tab.classList.add("active");

      updateGlider(tab);
    });
  });
});

// Selfi Photo FN
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const selfieImage = document.getElementById("selfie");
const captureButton = document.getElementById("capture");
const modalSelfi = document.querySelector(".modal-selfi");
const selfi = document.querySelector(".selfi-btn");

let captured = true;
modalSelfi.addEventListener("click", () => {
  modalSelfi.classList.add("hidden");
});

selfi.addEventListener("click", () => {
  modalSelfi.classList.remove("hidden");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => {
      console.error("Error accessing the camera: ", err);
    });
    
});

captureButton.addEventListener("click", () => {

  selfieImage.classList.remove("hidden");
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const dataUrl = canvas.toDataURL("image/png");
  selfieImage.src = dataUrl;

  captured = false;
  console.log(captured)

  
});

