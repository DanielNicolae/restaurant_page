
export default function menu() {
  // menu
  const content = document.getElementById("content");
  const main = document.createElement("main");
  content.appendChild(main);
  const menu = document.createElement("div");
  menu.classList.add("menu");
  main.appendChild(menu);
  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menuTitle");
  menu.appendChild(menuTitle);
  menuTitle.innerHTML = "Menu";
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  menu.appendChild(menuContent);
  const item1 = document.createElement("p");
  item1.innerHTML = "Super big fat stake";
  const item2 = document.createElement("p");
  item2.innerHTML = "More meat!!!";
  const item3 = document.createElement("p");
  item3.innerHTML = "Even more meat!!!";
  menuContent.appendChild(item1);
  menuContent.appendChild(item2);
  menuContent.appendChild(item3);
}