// Import stylesheets
import "./style.css";

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

function createItem(text) {
  const itemContainer = document.createElement("div");

  itemContainer.innerHTML = `
    <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
      <div class="w-4/5 h-10 py-3 px-1">
          <p class="hover:text-blue-dark">${text}</p>
      </div>
    </div>`;

  return itemContainer;
}

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

appendItems(2);
