// Import stylesheets
import "./style.css";
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
let paginationPosition = page;

function usePaginationCount(currentPage) {
  container.innerText = "";
  appendItems(currentPage, recordsPerPage, contactList, container);
  paginationPosition = currentPage;
}

function usePagination(target, that) {
  if (target.innerText === "Previous") {
    if (paginationPosition >= 0) {
      paginationPosition--;
      usePaginationCount(paginationPosition--);
    }
  } else if (target.innerText === "Next") {
    console.log(that);
    const maxLength = that.childElementCount - 2;
    if (paginationPosition < maxLength) {
      paginationPosition++;
      usePaginationCount(paginationPosition++);
    }
  }
}

btns.addEventListener("click", function({ target }) {
  if (!isNaN(parseInt(target.innerText))) {
    usePaginationCount(parseInt(target.innerText));
  } else usePagination(target, this);
});

//initial append items
appendItems(page, recordsPerPage, contactList, container);
