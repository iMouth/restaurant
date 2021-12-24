import "./style/home.css";
import "./style/menu.css";
import "./style/contact.css";
import { setUp } from "./modules/content.js";

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

function displayHome() {
  let home = document.getElementById("pic-slogan");
  home.style.display = "flex";
}

function displayContact() {
  let home = document.getElementById("contact");
  home.style.display = "flex";
}

function setUpPage() {
  setUp();

  document.getElementById("home-user").addEventListener("click", displayHome);
  document.getElementById("menu-user").addEventListener("click", displayMenu);
  document
    .getElementById("contact-user")
    .addEventListener("click", displayContact);
}

setUpPage();
