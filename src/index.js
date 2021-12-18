import "./style/style.css";
import "./img/berrylot.jpeg";

function setUpPage() {
  console.log("hi");
  let content = document.querySelector("#content");

  // Header
  let header = document.createElement("header");

  console.log("hi");
  header.textContent = "Açaí Bowls";

  console.log("hi");
  content.appendChild(header);

  // Tagline
  let tagLine = document.createElement("h1");
  tagLine.setAttribute("id", "tagline");
  tagLine.textContent = "choose your blend";
  content.appendChild(tagLine);

  // Desciption
  let desc = document.createElement("h2");
  let para1 = document.createElement("div");
  let para2 = document.createElement("div");
  para1.textContent =
    "Açaí is a superfood berry that grows in the Amazon rainforest. It has been used for centuries to promote good health. Today, the Açaí berry is known for its nutritional value and is used in many healthy diets.";
  para2.textContent =
    "Your Açaí Bowl or Smoothie will be the next step to healthy living.";
  desc.appendChild(para1);
  desc.appendChild(para2);
  content.appendChild(desc);

  console.log("hi");
}

setUpPage();
