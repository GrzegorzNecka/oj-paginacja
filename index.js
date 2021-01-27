// Import stylesheets
import "./style.css";

const container = document.querySelector(".w-full.container");
const btnPrev = document.querySelectorAll("ul.flex");

const contactList = [
  "Peter Petrelli",
  "Claire Bennet",
  "Hiro Nakamura",
  "Nathan Petrelli",
  "Sylar",
  "Niki Sanders"
];

const perPageCounter = 2;

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

// function appendItems(site = 0, length = perPageCounter) {
//   for (let i = site; i < site + length; i++) {

//     container.appendChild(createItem(contactList[i]));
//   }
// }

// appendItems(0);

function appendItems(site = 0, length = perPageCounter) {
  //i = 0
  //i < 2

  //i = 1
  //i < 3

  //i = 2
  //i < 4

  let i = site;

  console.log(i % 2);

  for (i; i < site + length; i++) {
    container.appendChild(createItem(contactList[i]));
  }
}

appendItems(3);
