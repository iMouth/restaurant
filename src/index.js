import "./style/home.css";
import "./style/menu.css";
import "./style/contact.css";
import "./style/content.css";
import { setUp } from "./modules/content.js";
import { homePage } from "./modules/homePage.js";
import { contactPage } from "./modules/contactPage.js";
import { menuPage } from "./modules/menuPage.js";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./img/", false, /\.(png|jpe?g|svg)$/)
);

function remove() {
  // TODO: Implement later
}

function displayHome() {
  let home = document.getElementById("pic-slogan");
  home.style.display = "flex";
}

function displayMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = "flex";
}

function displayContact() {
  let home = document.getElementById("contact");
  home.style.display = "flex";
}

function setUpPage() {
  setUp();
  homePage();
  menuPage();
  contactPage();
  document.getElementById("home-user").addEventListener("click", displayHome);
  document.getElementById("menu-user").addEventListener("click", displayMenu);
  document
    .getElementById("contact-user")
    .addEventListener("click", displayContact);
}

setUpPage();
