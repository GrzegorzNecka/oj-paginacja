// Import stylesheets
import "./style.css";
import createItem from "./createItem";

const container = document.querySelector(".w-full.container");
const recordsPerPage = 2;

const contactList = [
  "Peter Petrelli",
  "Claire Bennet",
  "Hiro Nakamura",
  "Nathan Petrelli",
  "Sylar",
  "Niki Sanders",
  "Marian"
];

function appendItems(page = 1) {
  // validate
  if (page < 1) page = 1;

  // i - od którego indexu contactList rozpocząć przeszukiwanie
  // length - po ilu elemenatch iterować, licząc od index === 0
  let i = (page - 1) * recordsPerPage;
  let length = page * recordsPerPage;

  for (i; i < length; i++) {
    typeof contactList[i] !== "undefined" &&
      container.appendChild(createItem(contactList[i]));
  }
}

appendItems();
