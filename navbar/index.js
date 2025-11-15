// let container = document.querySelector(".container");
// let main = document.querySelector("main");
// let navbar = document.createElement("nav");
// let array = [
//   {
//     name: "Home",
//     path: "#",
//   },
//   {
//     name: "Search",
//     path: "#",
//   },
//   {
//     name: "Post",
//     path: "#",
//   },
//   {
//     name: "reels",
//     path: "#",
//   },
//   {
//     name: "Profile",
//     path: "#",
//   },
// ];

// let ul = document.createElement("ul");
// array.map((value) => {
//   let li = document.createElement("li");
//   let a = document.createElement("a");
//   a.href = value.path;
//   a.innerHTML = value.name;
//   li.appendChild(a);
//   ul.appendChild(li);
// });
// navbar.appendChild(ul);
// document.body.appendChild(navbar);

// let topNavbar = document.createElement("nav");
// let topUl = document.createElement("ul");
// let topData = [
//   {
//     name: "logo",
//     path: "#",
//   },
//   {
//     name: "Notifications",
//     path: "#",
//   },
//   {
//     name: "Messages",
//     path: "#",
//   },
// ];

// topData.map((value) => {
//   let a = document.createElement("a");
//   let li = document.createElement("li");
//   a.href = value.path;
//   a.innerHTML = value.name;
//   li.appendChild(a);
//   topUl.appendChild(li);
// });
// topNavbar.appendChild(topUl);
// container.before(topNavbar);

// ! Creating a function for navbar
let container = document.querySelector(".container");
let main = document.querySelector("main");
let createNavbar = (array, position) => {
  let navbar = document.createElement("nav");
  let ul = document.createElement("ul");
  array.map((value) => {
    let a = document.createElement("a");
    let li = document.createElement("li");
    a.href = value.path;
    a.innerHTML = value.name;
    li.appendChild(a);
    ul.appendChild(li);
  });
  navbar.appendChild(ul);
  if (position === "top") {
    container.before(navbar);
  } else {
    main.appendChild(navbar);
  }
};
let bottomData = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Search",
    path: "#",
  },
  {
    name: "Post",
    path: "#",
  },
  {
    name: "reels",
    path: "#",
  },
  {
    name: "Profile",
    path: "#",
  },
];
createNavbar(bottomData, "bottom");
let topData = [
  {
    name: "logo",
    path: "#",
  },
  {
    name: "Notifications",
    path: "#",
  },
  {
    name: "Messages",
    path: "#",
  },
];
createNavbar(topData, "top");
