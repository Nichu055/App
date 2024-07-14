const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

const Dashboard = document.getElementsByClassName("home");
const Notifications = document.getElementsByClassName("Notifications");
const Likes = document.getElementsByClassName("Likes");

//Let's fvcking go

const navLinks = document.querySelectorAll(".nav-link");
const navSections = document.querySelectorAll(".nav-section");

navLinks.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const nav = e.currentTarget;

    navSections.forEach((navSection) => {
      if (navSection.id != nav.textContent.trim().toLowerCase()) {
        navSection.style.display = "none";
      } else {
        navSection.style.display = "block";
      }
    });
  });
});
