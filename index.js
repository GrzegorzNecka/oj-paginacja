// Import stylesheets
import "./style.css";
// import createItem from "./createItem";
import appendItems from "./appendItems";

const container = document.querySelector(".w-full.container");
const btns = document.querySelector("ul");

const contactList = [
  "Peter Petrelli",
  "Claire Bennet",
  "Hiro Nakamura",
  "Nathan Petrelli",
  "Sylar",
  "Niki Sanders"
];

const page = 1;
const recordsPerPage = 2;
let paginationCounter = page;

function usePagination(currentPage) {
  container.innerText = "";
  appendItems(currentPage, recordsPerPage, contactList, container);
  paginationCounter = currentPage;
}

btns.addEventListener("click", function({ target }) {
  if (!isNaN(parseInt(target.innerText))) {
    usePagination(parseInt(target.innerText));
  } else if (target.innerText === "Previous") {
    if (paginationCounter >= 0) {
      paginationCounter--;
      usePagination(paginationCounter--);
    }
  } else if (target.innerText === "Next") {
    const maxLength = this.childElementCount - 2;
    if (paginationCounter < maxLength) {
      paginationCounter++;
      usePagination(paginationCounter++);
    }
  }


});

//initial append items
appendItems(page, recordsPerPage, contactList, container);
