function setUp() {
  let content = document.querySelector("#content");
  header(content);
  tagline(content);
  desc(content);
}

function header(content) {
  let header = document.createElement("header");
  header.textContent = "Açaí Bowls";
  content.appendChild(header);
}

function tagline(content) {
  let tagLine = document.createElement("h1");
  tagLine.setAttribute("id", "tagline");
  tagLine.textContent = "choose your blend";
  content.appendChild(tagLine);
}

function desc(content) {
  let desc = document.createElement("h2");
  let para1 = document.createElement("div");
  let br = document.createElement("br");
  let para2 = document.createElement("div");
  para1.textContent =
    "Açaí is a superfood berry that grows in the Amazon rainforest. It has been used for centuries to promote good health. Today, the Açaí berry is known for its nutritional value and is used in many healthy diets.";
  para2.textContent =
    "Your Açaí Bowl or Smoothie will be the next step to healthy living.";
  desc.appendChild(para1);
  desc.appendChild(br);
  desc.appendChild(para2);
  content.appendChild(desc);
}

export { setUp };
