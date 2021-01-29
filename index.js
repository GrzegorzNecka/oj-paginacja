// Import stylesheets
import "./style.css";

// http://jsfiddle.net/Lzp0dw83/

const container = document.querySelector(".w-full.container");

const contactList = [
  "Peter Petrelli",
  "Claire Bennet",
  "Hiro Nakamura",
  "Nathan Petrelli",
  "Sylar",
  "Niki Sanders",
  "Marian"
];

// console.log(arrPerpage());

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

const recordsPerPage = 2;

function appendItems(page = 1, length = recordsPerPage) {
  if (page < 1) page = 1;

  let i = (page - 1) * recordsPerPage;

  console.log(i % 2);

  for (i; i < page + length; i++) {
    container.appendChild(createItem(contactList[i]));
  }
}

appendItems(1);
