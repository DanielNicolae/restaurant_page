console.log("hello...");
import menu from "./pages/menu";

const header = (title, mottoText) => {
  // title
  const content = document.getElementById("content");
  const nav = document.createElement("nav");
  content.appendChild(nav);
  const titleText = document.createElement("div");
  titleText.classList.add("title");
  nav.appendChild(titleText);
  titleText.innerHTML = title;
  // motto
  const motto = document.createElement("div");
  motto.classList.add("moto");
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
  homePage.classList.add("homePage");
  liHome.appendChild(homePage);
  // menu page
  const liMenu = document.createElement("li");
  const menuPage = document.createElement("button");
  menuPage.classList.add("menuPage");
  menuPage.innerHTML = "Menu";
  liMenu.appendChild(menuPage);
  mainMenu.appendChild(liHome);
  mainMenu.appendChild(liMenu);
}

header("Restauranty", "Gluttony for the win!!!");
menu();
