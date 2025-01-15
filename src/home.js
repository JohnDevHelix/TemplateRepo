import { mainContainer, createElemWithClass } from "./index.js";
import { History } from "./history.js";
import headerImage1 from "./assets/header1.jpg";
import headerImage2 from "./assets/header2.jpg";
import headerImage3 from "./assets/header3.jpg";
import headerImage4 from "./assets/header4.jpg";

export function HomePage() {
  // Restaurant name
  const header = createElemWithClass("div", mainContainer, "header");
  const headerText = createElemWithClass("h1", header);
  headerText.textContent = "Kuya Louie's Carinderia";

  // About Us
  const divAbout = createElemWithClass("div", mainContainer, "about-us");
  const aboutUsContent = createElemWithClass("div", divAbout);
  aboutUsContent.textContent =
    "Taste the Flavor of the Nation: Filipino Cooking, Home Cooking";

  const divAbout1 = createElemWithClass("div", mainContainer, "about-us");
  const aboutUsContent1 = createElemWithClass("div", divAbout1);
  aboutUsContent1.textContent =
    "Kuya Louie's carinderia serves variety of Filipino home made dishes.";

  // Images header
  const divImages = createElemWithClass(
    "div",
    mainContainer,
    "images-container"
  );

  const images = [headerImage1, headerImage2, headerImage3, headerImage4];

  images.forEach((image) => {
    const img = createElemWithClass("img", divImages, "header-images");
    img.src = image;
  });

  History();
}
