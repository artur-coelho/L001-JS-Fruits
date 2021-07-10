import { market } from "../db/dbFruits.js";

export const body = () => {
  const appElement = newElement("div", "container");
  const itemsGrid = newElement("div", "items-grid");
  appElement.appendChild(itemsGrid);
  itemsGrid.appendChild(createCard(market[0]));
  itemsGrid.appendChild(createCard(market[1]));
  itemsGrid.appendChild(createCard(market[2]));
  itemsGrid.appendChild(createCard(market[3]));
  itemsGrid.appendChild(createCard(market[4]));
  itemsGrid.appendChild(createCard(market[5]));
  appElement.appendChild(newElement("div", "container-list"));

  return appElement;
};

export function newElement(tag, className = null, value = null) {
  const element = document.createElement(tag);
  element.classList.add(className);
  element.innerText = value;
  return element;
}

function createCard(item) {
  const card = newElement("div", "card");
  const image = newElement("img", "image");
  image.setAttribute("src", item.src);
  image.setAttribute("alt", item.name);
  card.appendChild(image);

  const content = newElement("div", "content");
  const name = newElement("p", "name", `Name : ${item.name}`);
  const price = newElement("p", "price", `Price : $${item.price}`);
  const quantity = newElement("p", "quantity", `Quantity : ${item.quantity}`);
  const uni = newElement("p", "uni", "un. 1");

  content.appendChild(name);
  content.appendChild(quantity);
  content.appendChild(price);
  content.appendChild(uni);
  card.appendChild(content);

  return card;
}
