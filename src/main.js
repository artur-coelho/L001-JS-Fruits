import { header } from "./header/header.js";
import { body } from "./app/app.js";

const app = document.querySelector("#app");

app.appendChild(header());
app.appendChild(body());
