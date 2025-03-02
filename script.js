/* MENU */
const iconMenu = document.querySelector(".icon-menu");
const listMenu = document.querySelector("ul");
const hamburgerIcon = document.querySelector(".fa-solid");

iconMenu.addEventListener("click", () => {
  iconMenu.classList.toggle("active");
  listMenu.classList.toggle("active");
});

iconMenu.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    listMenu.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    listMenu.style.display = "none";
  }
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    iconMenu.classList.remove("active");
  })
);

/* DARK/LIGHT SWITCH */

let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightmode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

/* LIGHT MODE */
if (lightmode === "active") enableLightmode();
/* DARK MODE */

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enableLightmode() : disableLightmode();
});
