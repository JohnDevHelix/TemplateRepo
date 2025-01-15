import { HomePage } from "./home";
import { Menu } from "./menu";
import { ContactUs } from "./contact";
import "./style.css";
export const content = document.querySelector("#content");
export const createElemWithClass = (element, append, className = null) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  append.appendChild(newElement);
  return newElement;
};

export const mainContainer = createElemWithClass(
  "div",
  content,
  "main-container"
);

HomePage();

// Navigation bar
const header = document.querySelector("header");
const headerDiv = createElemWithClass("div", header, "header-div");
const navsDiv = createElemWithClass("div", headerDiv, "nav-div");
const navs = document.querySelectorAll("nav");
navs.forEach((nav) => {
  navsDiv.appendChild(nav);
});

// Navigation logo
const navLogo = createElemWithClass("div", headerDiv, "nav-logo");
navLogo.textContent = "Kuya Louie's";

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    mainContainer.innerHTML = "";
    switch (button.textContent) {
      case "Menu": {
        Menu();
        break;
      }
      case "Contact Us": {
        ContactUs();
        break;
      }
      default:
        HomePage();
    }
  });
});

// Footer
const body = document.querySelector("body");
const footer = createElemWithClass("footer", body);
const footerDiv = createElemWithClass("div", footer);
footerDiv.id = "footer";
const footerP = createElemWithClass("p", footerDiv);
footerP.innerHTML = "&bull; &copy; 2025 - Kuya Louie's Carinderia &bull;";
