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

function usePagination(
  { innerText: btnText },
  { childElementCount: bntsLength }
) {
  switch (btnText) {
    case "Previous":
      if (paginationPosition >= 0) {
        paginationPosition--;
        usePaginationCount(paginationPosition--);
      }
      break;
    case "Next":
    default:
      const maxLength = bntsLength - 2;
      if (paginationPosition < maxLength) {
        paginationPosition++;
        usePaginationCount(paginationPosition++);
      }
      break;
  }
}

btns.addEventListener("click", function({ target }) {
  if (!isNaN(parseInt(target.innerText))) {
    usePaginationCount(parseInt(target.innerText));
  } else usePagination(target, this);
});

//initial append items
appendItems(page, recordsPerPage, contactList, container);
