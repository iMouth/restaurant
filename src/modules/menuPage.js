function menuPage() {
  let content = document.getElementById("content");
  let menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  awaken(menu);
  brazillian(menu);
  sedona(menu);
  volcano(menu);
  cleanse(menu);
  mauiwaui(menu);
  vortex(menu);
  redrock(menu);
  summit(menu);

  content.appendChild(menu);
}

function item(menu, src, alt, title, desc) {
  let container = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  container.appendChild(img);

  let bowl = document.createElement("h1");
  bowl.textContent = title;
  container.appendChild(bowl);

  let topping = document.createElement("h2");
  topping.textContent = desc;
  container.appendChild(topping);

  menu.appendChild(container);
}

function awaken(menu) {
  let src = "../src/img/awaken.png";
  let alt = "awaken Acai bow";
  let title = "AWAKEN BOWL";
  let desc =
    "Topped With: granola, raspberry, golden raisin, almond, lemon zest and honey";
  item(menu, src, alt, title, desc);
}

function brazillian(menu) {
  let src = "../src/img/brazillian.png";
  let alt = "brazillian Acai bow";
  let title = "BRAZILLIAN BOWL";
  let desc = "Topped With: granola, mango, strawberry, kiwi and honey";
  item(menu, src, alt, title, desc);
}

function sedona(menu) {
  let src = "../src/img/sedona.png";
  let alt = "sedona Acai bow";
  let title = "SEDONA BOWL";
  let desc = "Topped With: granola, strawberry, banana and honey";
  item(menu, src, alt, title, desc);
}

function volcano(menu) {
  let src = "../src/img/volcano.png";
  let alt = "volcano Acai bow";
  let title = "VOLCANO BOWL";
  let desc =
    "Topped With: granola, kiwi, strawberry, blueberry, and coconut oil";
  item(menu, src, alt, title, desc);
}

function cleanse(menu) {
  let src = "../src/img/cleanse.png";
  let alt = "cleanse Acai bow";
  let title = "CLEANSE BOWL";
  let desc =
    "Topped With: granola, strawberry, pineapple, banana, lemon zest and coconut oil";
  item(menu, src, alt, title, desc);
}

function mauiwaui(menu) {
  let src = "../src/img/maui-waui.png";
  let alt = "maui waui Acai bow";
  let title = "MAUI WAUI BOWL";
  let desc =
    "Topped With: granola, pineapple, toasted coconut, cashew, cacaonibs, bee pollen and honey";
  item(menu, src, alt, title, desc);
}

function vortex(menu) {
  let src = "../src/img/vortex.png";
  let alt = "vortex Acai bow";
  let title = "VORTEX BOWL";
  let desc =
    "Topped With: granola, blueberry, banana, chia and flax seed, toasted coconut and honey";
  item(menu, src, alt, title, desc);
}

function redrock(menu) {
  let src = "../src/img/red-rock.png";
  let alt = "red rock Acai bow";
  let title = "RED ROCK BOWL";
  let desc =
    "Topped With: granola, raspberry, banana, goji berry and raspberry puree";
  item(menu, src, alt, title, desc);
}

function summit(menu) {
  let src = "../src/img/summit.png";
  let alt = "summit Acai bow";
  let title = "SUMMIT BOWL";
  let desc =
    "Topped With: strawberries, shaved chocolate, cashews, granola, and honey";
  item(menu, src, alt, title, desc);
}
export { menuPage };
