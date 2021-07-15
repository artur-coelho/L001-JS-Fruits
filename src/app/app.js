import { market } from "../db/dbFruits.js";

export const body = () => {
  const appElement = newElement("div", "container");
  const itemsGrid = newElement("div", "items-grid");
  appElement.appendChild(itemsGrid);

  market.forEach((item) => {
    itemsGrid.appendChild(createCard(item));
  });

  const containerList = newElement("div", "container-list");
  appElement.appendChild(containerList);
  const headerItem = newElement("div", "header-item");
  containerList.appendChild(headerItem);
  headerItem.appendChild(newElement("p", null, "Name"));
  headerItem.appendChild(newElement("p", null, "Quantity"));
  headerItem.appendChild(newElement("p", null, "Price $"));
  headerItem.appendChild(newElement("p", null, "Total"));

  return appElement;
};
/**
 * @description cria um elemento html
 * @param {String} tag
 * @param {String} className
 * @param {String} value
 * @returns elemento html
 */
export function newElement(tag, className = null, value = null) {
  const element = document.createElement(tag);

  className && element.classList.add(className);
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
