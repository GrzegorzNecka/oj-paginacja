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

const recordsPerPage = 2;

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

function changePage(page) {
  const btnContainer = document.querySelectorAll("ul.flex");
  const btnPrev = btnContainer[0].firstElementChild;
  const btnNext = btnContainer[0].lastElementChild;
  console.log(btnNext);
  console.log(btnPrev);
}

changePage(1);

// function appendItems(site = 0, length = recordsPerPage) {
//   for (let i = site; i < site + length; i++) {

//     container.appendChild(createItem(contactList[i]));
//   }
// }

// appendItems(0);

// function appendItems(site = 0, length = recordsPerPage) {
//   //i = 0
//   //i < 2

//   //i = 1
//   //i < 3

//   //i = 2
//   //i < 4

//   let i = site;

//   console.log(i % 2);

//   for (i; i < site + length; i++) {
//     container.appendChild(createItem(contactList[i]));
//   }
// }

// appendItems(3);
