import { Menu } from "./menu";
import Calamares from "./assets/calamares.jpg";
import SinigangnaBaboy from "./assets/sinigangnababoy.jpg";
import Turon from "./assets/turon.jpg";
import BananaCue from "./assets/bananacue.jpg";
import Dynamite from "./assets/dynamite.jpg";
import Afritada from "./assets/afritada.jpg";
import Adobo from "./assets/adobo.jpg";
import HaloHalo from "./assets/halohalo.jpg";

class Specialty {
  constructor(variety, foodName, description, asset) {
    this.variety = variety;
    this.foodName = foodName;
    this.description = description;
    this.asset = asset;
  }
}

// appetizers list
export const appetizer1 = new Specialty(
  "Appetizer",
  "Calamares",
  "Calamares is the Filipino version of the Mediterranean breaded fried squid dish, Calamari.",
  Calamares
);

export const appetizer2 = new Specialty(
  "Appetizer",
  "Dynamite Lumpia",
  "Dynamite Lumpia is a version of the popular Filipino lumpia. This is unique because it involves the use of stuffed long green chili.",
  Dynamite
);

// main course list
export const main1 = new Specialty(
  "Main Course",
  "Sinigang na Baboy",
  "Sinigang na baboy with Gabi is a Filipino pork soup with taro cooked in a sour broth.",
  SinigangnaBaboy
);

export const main2 = new Specialty(
  "Main Course",
  "Chicken Afritada",
  "Chicken Afritada or afritadang manok is a type of Filipino chicken stew with tomato based sauced.",
  Afritada
);

export const main3 = new Specialty(
  "Main Course",
  "Pork Adobo",
  "Pork Adobo is pork cooked in soy sauce, vinegar, and garlic. It is considered as the Philippine's national dish because of its popularity.",
  Adobo
);

// desserts list
export const dessert1 = new Specialty(
  "Desserts",
  "Turon",
  "Turon are deep fried bananas wrapped in spring roll wrappers.",
  Turon
);

export const dessert2 = new Specialty(
  "Desserts",
  "Banana Cue",
  "A popular Filipino snack or street food made of fried bananas coated in caramelized brown sugar and served on skewers.",
  BananaCue
);

export const dessert3 = new Specialty(
  "Desserts",
  "Halo-Halo",
  "Halo-Halo is a refreshing Filipino ice dessert made with various tropical ingredients topped with milk, leche flan, and ice cream.",
  HaloHalo
);
