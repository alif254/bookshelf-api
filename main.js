// Do your work here...
// console.log('Hello, world!');

const dataBooks = [];
const bookFormSubmit = document.getElementById("bookFormSubmit");

function dataBooksId() {
  return +new Date();
}

function bookItem(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
}

function findBooksIndex(booksId) {
  for (const i in dataBooks) {
    if (dataBooks[i].id === booksId) {
      return i;
    }
  }
}