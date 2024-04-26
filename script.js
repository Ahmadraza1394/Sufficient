// ---------------------FOR NAVBAR SMALL SCREEN------------------------
const mobileMenuButton = document.getElementById("mobileMenuButton");
const desktopMenu = document.getElementById("desktopMenu");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

function toggleBackground(link) {
  const allLinks = document.querySelectorAll(".bg-green-50");
  allLinks.forEach((el) => el.classList.remove("bg-green-50"));
  link.classList.add("bg-green-50");
}

const subscriptionsLink = document.getElementById("subscriptionsLink");
const aboutLink = document.getElementById("aboutLink");
const contactLink = document.getElementById("contactLink");

subscriptionsLink.addEventListener("click", () => {
  toggleBackground(subscriptionsLink);
});

aboutLink.addEventListener("click", () => {
  toggleBackground(aboutLink);
});

contactLink.addEventListener("click", () => {
  toggleBackground(contactLink);
});

const mobileSubscriptionsLink = document.getElementById(
  "mobileSubscriptionsLink"
);
const mobileAboutLink = document.getElementById("mobileAboutLink");
const mobileContactLink = document.getElementById("mobileContactLink");

mobileSubscriptionsLink.addEventListener("click", () => {
  toggleBackground(mobileSubscriptionsLink);
});

mobileAboutLink.addEventListener("click", () => {
  toggleBackground(mobileAboutLink);
});

mobileContactLink.addEventListener("click", () => {
  toggleBackground(mobileContactLink);
});

// --------------------FOR FOCUS ON SEARCH------------------------
function focusSearch() {
  document.getElementById("search").focus();
}

// --------------------FOR TICK ICON ON CLICK------------------------
function toggleTick(imgElement) {
  const tickIcon = imgElement.parentElement.querySelector(".tick-icon");
  if (tickIcon) {
    tickIcon.classList.toggle("hidden");
  }
}
