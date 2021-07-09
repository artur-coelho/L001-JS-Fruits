import { newElement } from "../app/app.js";

export const header = () => {
  const headerElement = newElement("header", "header");

  const h1 = newElement("h1");
  h1.innerText = "FRUIT KART";

  headerElement.appendChild(h1);

  return headerElement;
};
