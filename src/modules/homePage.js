function homePage() {
  let content = document.getElementById("content");
  let frontPage = document.createElement("div");
  frontPage.setAttribute("id", "pic-slogan");
  frontPage.setAttribute("class", "screen");
  image(frontPage);
  slogan(frontPage);
  content.appendChild(frontPage);
}

function image(frontPage) {
  let img = document.createElement("img");
  img.setAttribute("src", "../src/img/berry.png");
  img.setAttribute("alt", "Açaí berries");
  img.setAttribute("class", "berry");
  frontPage.appendChild(img);
}

function slogan(frontPage) {
  let slogan = document.createElement("div");
  slogan.setAttribute("class", "slogan");
  sloganHelper("Choose", slogan);
  sloganHelper("Your", slogan);
  sloganHelper("Blend", slogan);
  frontPage.appendChild(slogan);
}

function sloganHelper(word, slogan) {
  let wordP = document.createElement("p");
  wordP.textContent = word;
  slogan.appendChild(wordP);
}

export { homePage };
