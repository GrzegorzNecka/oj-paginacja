import createItem from "./createItem";

function appendItems(page, recordsPerPage, contactList, container) {
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

export default appendItems;
