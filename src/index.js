import "./style/home.css";
import "./style/menu.css";
import "./style/contact.css";
import "./style/content.css";
import { setUp } from "./modules/content.js";
import { homePage } from "./modules/homePage.js";
import { contactPage } from "./modules/contactPage.js";
import { menuPage } from "./modules/menuPage.js";

function removeScreen() {
  let remove = document.getElementsByClassName("screen")[0];
  remove.remove();
}

function displayHome() {
  removeScreen();
  homePage();
}

function displayMenu() {
  removeScreen();
  menuPage();
}

function displayContact() {
  removeScreen();
  contactPage();
}

function setUpPage() {
  setUp();
  //homePage();
  contactPage();
  document.getElementById("home-user").addEventListener("click", displayHome);
  document.getElementById("menu-user").addEventListener("click", displayMenu);
  document
    .getElementById("contact-user")
    .addEventListener("click", displayContact);
}

setUpPage();
