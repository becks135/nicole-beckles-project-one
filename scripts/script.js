const closeNavButton = document.getElementById("close-menu-button");
const slideOutMenuButton = document.getElementById("slide-out-button")
const slideOutMenu = document.getElementsByClassName("slide-out-nav");


closeNavButton.addEventListener("click",()=>{
    slideOutMenu[0].classList.add("sr-only");
});

slideOutMenuButton.addEventListener("click", () => {
    slideOutMenu[0].classList.remove("sr-only");
});