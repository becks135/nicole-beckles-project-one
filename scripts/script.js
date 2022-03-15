const closeNavButton = document.getElementById("close-menu-button");

function closeSlideoutMenu() {
    const slideOutMenu = document.getElementsByClassName("slide-out-nav");
    slideOutMenu[0].style.display = "none";
}

closeNavButton.addEventListener("click",()=>{closeSlideoutMenu()});