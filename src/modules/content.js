function setUp() {
  let content = document.querySelector("#content");
  let header = document.createElement("header");
  header.setAttribute("id", "header-main");
  title(header);
  nav(header);
  content.appendChild(header);
}

function title(header) {
  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.textContent = "Açaí Bowls";
  header.appendChild(title);
}

function nav(header) {
  let nav = document.createElement("ul");
  nav.setAttribute("class", "user", nav);
  createNav("Home", "home-user", nav);
  createNav("Menu", "menu-user", nav);
  createNav("Contact", "contact-user", nav);
  header.appendChild(nav);
}

function createNav(text, id, ul) {
  let li = document.createElement("li");
  li.setAttribute("id", id);
  li.textContent = text;
  ul.appendChild(li);
}

export { setUp };
