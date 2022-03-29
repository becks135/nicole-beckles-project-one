//on homepage
//if user scrolls a certain amount
//display pop-up

let allowPopup = true;
const popupOverlay = document.querySelector(".popup-background");

window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 100 && allowPopup) {
    popupOverlay.classList.add("show-popup");

    allowPopup = false; //only pop-up once on page load
    }
});

//add event listener to free trip button to display pop-up
const freeTripButton = document.querySelector(".free-trip-button");
freeTripButton.addEventListener("click", () => {
    popupOverlay.classList.add("show-popup");
    allowPopup = false;
});

//close pop-up if
// - x clicked
// - popup form submitted
// - anywhere on the screen (outside of popup message) clicked;
function closePopup() {
    popupOverlay.classList.remove("show-popup");
}

const closePopupButton = document.querySelector("#close-popup-button");
closePopupButton.addEventListener("click", () => closePopup());

const mailingListForm = document.querySelector(".mailing-list-form");
mailingListForm.addEventListener("submit", (event) => {
    event.preventDefault();
    closePopup();
});

const popupContainer = document.querySelector(".popup-container");
popupContainer.addEventListener("click", (event) => {
    if (event.target===popupContainer){
        closePopup();
    }
});


