let ham = document.querySelector('#hamburger');

let closeBtn = document.querySelector('#close');

let sideBar = document.querySelector('#mobile-menu');


ham.addEventListener('click', openSideBar);
closeBtn.addEventListener('click', closeSideBar);

function openSideBar() {
    // Switch the icons
   ham.style.display = "none";
   closeBtn.style.display = "block";

    // show the sideBar
    // sideBar.classList.add('block-me')
    sideBar.style.display = "block";
    sideBar.style.transform = "translateX(0px)";
}

function closeSideBar() {
    // Switch the icons
    ham.style.display = "block";
    closeBtn.style.display = "none";

    // hide the sideBar
    sideBar.style.display = "block";
    sideBar.style.transform = "translateX(900px)";
}
