import { mainContainer, createElemWithClass } from "./index.js";
import {
  appetizer1,
  appetizer2,
  main1,
  main2,
  main3,
  dessert1,
  dessert2,
  dessert3,
} from "./menulist.js";

export function Menu() {
  // Menu header
  const headerMenuDiv = createElemWithClass(
    "div",
    mainContainer,
    "menu-header"
  );
  const h1 = createElemWithClass("h1", headerMenuDiv);
  h1.textContent = "Kuya Louie's Menu";

  // Appetizers
  const appetizersContainer = createElemWithClass(
    "div",
    mainContainer,
    "appetizer-container"
  );

  const appName = createElemWithClass("div", appetizersContainer, "appetizer");
  const appText = createElemWithClass("h2", appName);
  appText.textContent = "Appetizers";

  const appSubContainer = createElemWithClass(
    "div",
    appetizersContainer,
    "app-subcontainer"
  );

  // Main course
  const mainCourseContainer = createElemWithClass(
    "div",
    mainContainer,
    "course-container"
  );

  const mainName = createElemWithClass("div", mainCourseContainer, "main");
  const mainText = createElemWithClass("h2", mainName);
  mainText.textContent = "Main Course";

  const mainSubContainer = createElemWithClass(
    "div",
    mainCourseContainer,
    "main-subcontainer"
  );

  // Desserts
  const dessertsContainer = createElemWithClass(
    "div",
    mainContainer,
    "desserts-container"
  );

  const dessertName = createElemWithClass("div", dessertsContainer, "dessert");
  const dessertText = createElemWithClass("h2", dessertName);
  dessertText.textContent = "Desserts";

  const dessSubContainer = createElemWithClass(
    "div",
    dessertsContainer,
    "dessert-subcontainer"
  );

  function appendMenu(image, foodName, desc, append) {
    const newMenuDiv = createElemWithClass("div", append, "menu");
    const nameDescDiv = createElemWithClass("div", newMenuDiv, "name-desc");

    // Images
    const imgDiv = createElemWithClass("div", newMenuDiv, "menu-images");
    const foodImg = createElemWithClass("img", imgDiv);
    foodImg.src = image;

    // Food name
    const nameDiv = createElemWithClass("div", nameDescDiv, "food-name");
    const foodText = createElemWithClass("h2", nameDiv);
    foodText.textContent = foodName;

    // Description
    const descDiv = createElemWithClass("div", nameDescDiv, "desc");
    const descText = createElemWithClass("h3", descDiv);
    descText.textContent = desc;
  }

  const menuList = [
    appetizer1,
    appetizer2,
    main1,
    main2,
    main3,
    dessert1,
    dessert2,
    dessert3,
  ];

  menuList.forEach((menu) => {
    switch (menu.variety) {
      case "Appetizer": {
        appendMenu(
          menu.asset,
          menu.foodName,
          menu.description,
          appSubContainer
        );
        break;
      }
      case "Main Course": {
        appendMenu(
          menu.asset,
          menu.foodName,
          menu.description,
          mainSubContainer
        );
        break;
      }
      case "Desserts": {
        appendMenu(
          menu.asset,
          menu.foodName,
          menu.description,
          dessSubContainer
        );
        break;
      }
    }
  });
}
