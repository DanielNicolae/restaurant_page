console.log("hello...");
const header = (title) => {
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
  motto.innerHTML = "Gluttony for the win!!!"
}

header("Restauranty");