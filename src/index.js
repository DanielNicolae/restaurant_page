
import menu from "./pages/menu";
import homePage from "./pages/home";

const header = (title, mottoText) => {
  // title
  const content = document.getElementById("content");
  const nav = document.createElement("nav");
  content.appendChild(nav);
  const titleText = document.createElement("h1");
  titleText.classList.add("title");
  nav.appendChild(titleText);
  titleText.innerHTML = title;
  // motto
  const motto = document.createElement("h2");
  motto.classList.add("motto");
  nav.appendChild(motto);
  motto.innerHTML = mottoText;
  // tabs
  const mainMenu = document.createElement("ul");
  nav.appendChild(mainMenu);
  mainMenu.classList.add("mainMenu");
  // home page
  const liHome = document.createElement("li");
  const homePage = document.createElement("button");
  homePage.innerHTML = "Home";
  homePage.classList.add("homePageButton");
  liHome.appendChild(homePage);
  // menu page
  const liMenu = document.createElement("li");
  const menuPage = document.createElement("button");
  menuPage.classList.add("menuPageButton");
  menuPage.innerHTML = "Menu";
  liMenu.appendChild(menuPage);
  mainMenu.appendChild(liHome);
  mainMenu.appendChild(liMenu);
  // navigation logic
  homePage.addEventListener("click", showHome);
  menuPage.addEventListener("click", showMenu);
}

header("Restauranty", "Gluttony for the win!!!");
homePage();
menu();

function showMenu() {
  const home = document.getElementsByClassName("home")[0];
  const menu = document.getElementsByClassName("menu")[0];
  home.style.display = "none";
  menu.style.display = "block";
}

function showHome() {
  const home = document.getElementsByClassName("home")[0];
  const menu = document.getElementsByClassName("menu")[0];
  home.style.display = "block";
  menu.style.display = "none";
}
