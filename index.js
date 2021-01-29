// Import stylesheets
import "./style.css";
// import createItem from "./createItem";
import appendItems from "./appendItems";

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

const page = 1;
const recordsPerPage = 2;

appendItems(page, recordsPerPage, contactList, container);
