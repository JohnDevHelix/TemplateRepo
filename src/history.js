import { mainContainer, createElement, createElemWithClass } from "./index.js";
import historyImage1 from "./assets/history1.png";
import historyImage2 from "./assets/history2.jpg";
import historyImage3 from "./assets/history3.jpg";
import historyImage4 from "./assets/history4.jpg";
import historyImage5 from "./assets/history5.jpg";

export function History() {
  const historyTextContent = createElemWithClass(
    "h2",
    mainContainer,
    "histList-header"
  );
  historyTextContent.textContent =
    "Kuya Louie's Carinderia: A Journey Through Time";

  const historyContainer = createElemWithClass(
    "div",
    mainContainer,
    "history-container"
  );

  // History images
  const divImages1 = createElemWithClass(
    "div",
    historyContainer,
    "historyImg-container"
  );

  const images = [
    historyImage1,
    historyImage2,
    historyImage3,
    historyImage4,
    historyImage5,
  ];

  images.forEach((image) => {
    const img = createElemWithClass("img", divImages1, "history-images");
    img.src = image;
  });

  // History List
  const historyDiv = createElemWithClass(
    "div",
    historyContainer,
    "history-divs"
  );

  const history = [
    {
      year: "Early 2000s: The Birth of a Carinderia",
      summary:
        "Kuya Louie's Carinderia was founded in the early 2000s by Louie, a passionate cook with a dream to bring authentic Filipino cuisine to his community. Starting with a small stall in a bustling neighborhood, Louie's dedication to quality and flavor quickly earned him a loyal customer base.",
    },
    {
      year: "2005: Expansion and Recognition",
      summary:
        "By 2005, Kuya Louie's Carinderia had expanded to a larger space, offering a wider variety of dishes. Louie's commitment to using fresh, locally-sourced ingredients set his carinderia apart from others. The carinderia gained recognition for its delicious and affordable meals, becoming a favorite spot for locals and visitors alike.",
    },
    {
      year: "2010: Community Hub",
      summary:
        "In 2010, Kuya Louie's Carinderia became more than just a place to eat; it transformed into a community hub. Louie started hosting events such as cooking classes and cultural celebrations, fostering a sense of togetherness and pride in Filipino heritage. The carinderia also began supporting local farmers by sourcing produce directly from them.",
    },
    {
      year: "2015: Modernization and Innovation",
      summary:
        "With the rise of social media, Kuya Louie's Carinderia embraced modern marketing techniques to reach a wider audience. Louie introduced new dishes inspired by traditional recipes, appealing to both nostalgic customers and adventurous foodies. The carinderia's popularity soared, attracting food bloggers and influencers.",
    },
    {
      year: "2020: Overcoming Challenges",
      summary:
        "The COVID-19 pandemic posed significant challenges, but Kuya Louie's Carinderia adapted by offering delivery and take-out services. Louie's resilience and dedication to serving his community kept the carinderia afloat during tough times. The carinderia also participated in community relief efforts, providing meals to those in need.",
    },
    {
      year: "Present Day: A Legacy of Flavor and Community",
      summary:
        "Today, Kuya Louie's Carinderia continues to thrive, celebrating over two decades of serving delicious Filipino food. Louie's legacy lives on through his commitment to quality, community, and innovation. The carinderia remains a beloved institution, cherished by all who walk through its doors.",
    },
  ];

  history.forEach((hist) => {
    const h3 = createElemWithClass("h3", historyDiv);
    const p = createElemWithClass("p", historyDiv);
    h3.textContent = hist.year;
    p.textContent = hist.summary;
  });
}
