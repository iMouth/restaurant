import "./style/home.css";
import "./style/menu.css";
import "./style/contact.css";
import { setUp } from "./modules/frontPage.js";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./img/", false, /\.(png|jpe?g|svg)$/)
);

function remove() {
  // TODO: Implement later
}

function displayMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = "flex";
}

document.getElementById("menu-user").addEventListener("click", displayMenu);

function displayHome() {
  let home = document.getElementById("pic-slogan");
  home.style.display = "flex";
}

document.getElementById("home-user").addEventListener("click", displayHome);

function displayContact() {
  let home = document.getElementById("contact");
  home.style.display = "flex";
}

document
  .getElementById("contact-user")
  .addEventListener("click", displayContact);

function setUpPage() {
  displayHome();
}

setUpPage();
