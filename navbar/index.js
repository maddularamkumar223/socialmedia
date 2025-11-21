// ! Creating a function for navbar
let container = document.querySelector(".container");
let main = document.querySelector("main");
let createNavbar = (array, position = "") => {
  let navbar = document.createElement("nav");
  let ul = document.createElement("ul");
  ul.classList = "row";
  array.map((value) => {
    let button = document.createElement("button");
    let li = document.createElement("li");
    li.classList = "col";
    button.addEventListener("click", () => {
      location.href = value.path;
    });
    button.innerHTML = value.name;
    li.appendChild(button);
    ul.appendChild(li);
  });
  navbar.appendChild(ul);
  if (position === "top") {
    container.before(navbar);
    navbar.className = "responsiveNavbar";
  } else if (position === "bottom") {
    navbar.className = "responsiveNavbar";
    main.appendChild(navbar);
  } else {
    container.before(navbar);
    navbar.className = "navbar";
  }
};
let bottomData = [
  {
    name: '<i class="fa-solid fa-house"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-magnifying-glass"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-plus"></i>',
    path: "../post/index.html",
  },
  {
    name: '<i class="fa-brands fa-youtube"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-user"></i>',
    path: "../profile/profile.html",
  },
];
createNavbar(bottomData, "bottom");
let topData = [
  {
    name: "logo",
    path: "../homepage/index.html",
  },
  {
    name: '<i class="fa-solid fa-bell"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-message"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-arrow-right-from-bracket"></i>',
    path: "#",
  },
];
createNavbar(topData, "top");

let navbar = [
  {
    name: "logo",
    path: "../homepage/index.html",
  },
  {
    name: '<i class="fa-solid fa-plus"></i>',
    path: "../post/index.html",
  },
  {
    name: '<i class="fa-solid fa-bell"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-message"></i>',
    path: "../users/user.html",
  },
  {
    name: '<i class="fa-solid fa-arrow-right-from-bracket"></i>',
    path: "#",
  },
  {
    name: '<i class="fa-solid fa-user"></i>',
    path: "../profile/profile.html",
  },
];
createNavbar(navbar);
