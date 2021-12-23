import "./style/home.css";
import "./style/menu.css";
import { setUp } from "./modules/frontPage.js";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("./img/", false, /\.(png|jpe?g|svg)$/)
);

function setUpPage() {}

setUpPage();
