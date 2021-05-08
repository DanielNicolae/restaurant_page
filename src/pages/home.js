
export default function homePage() {
  const content = document.getElementById("content");
  const main = document.createElement("main");
  content.appendChild(main);
  const home = document.createElement("div");
  home.classList.add("home");
  main.appendChild(home);
  const homeTitle = document.createElement("h2");
  homeTitle.innerHTML = "Welcome to the epic fest!!!";
  const homeMessage = document.createElement("p");
  homeMessage.innerHTML = "Are you ready for a feast that you are going to remember for the rest of your life?!!"
  home.appendChild(homeTitle);
  home.appendChild(homeMessage);

}