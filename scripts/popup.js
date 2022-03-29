//on homepage
//if user scrolls a certain amount
//display pop-up

// let scrollPosition = 0;
let allowPopup = true;
const popupContainer = document.querySelector(".popup-background");

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100 && allowPopup) {
    popupContainer.classList.add("show-popup");

    //only allow popup to show once
    allowPopup = false; //only pop-up once on page load
    }
});

//add event listener to free trip button to display pop-up
const freeTripButton = document.querySelector(".free-trip-button");
freeTripButton.addEventListener("click", () => {
    popupContainer.classList.add("show-popup");
  //only allow popup to show once
    allowPopup = false;
});

//close pop-up if
// - x clicked
// - anywhere on the screen (outside of popup message) clicked;
// - popup form submitted
function closePopup() {
    popupContainer.classList.remove("show-popup");
}

const closePopupButton = document.querySelector("#close-popup-button");
closePopupButton.addEventListener("click", () => closePopup());

const mailingListForm = document.querySelector(".mailing-list-form");
mailingListForm.addEventListener("submit", (event) => {
    event.preventDefault();
    closePopup();
});




