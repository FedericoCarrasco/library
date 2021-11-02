const library = [];

function Book (title, author, pages, readed) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readed = readed
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${readed}`
    }
}

function addBookToLibrary (title, author, pages, readed) {
    let newBook = new Book(title, author, pages, readed)
    library.push(newBook)
}

addBookToLibrary (`Harry Potter and the Sorcerer's Stone`, `J.K. Rowling`, 345, `No`);
addBookToLibrary (`Harry Potter and the Chamber of Secrets`, `J.K. Rowling`, 141, `No`);
addBookToLibrary (`Harry Potter and the Prisoner of Azkaban`, `J.K. Rowling`, 180, `No`);
addBookToLibrary (`Harry Potter and the Goblet of Fire`, `J.K. Rowling`, 301, `No`);
addBookToLibrary (`Harry Potter and the Order of the Phoenix`, `J.K. Rowling`, 412, `No`);
addBookToLibrary (`Harry Potter and the Half-Blood Prince`, `J.K. Rowling`, 652, `No`);
addBookToLibrary (`Harry Potter and the Deathly Hallows`, `J.K. Rowling`, 316, `No`);
addBookToLibrary (`Harry Potter and the Cursed Child`, `J.K. Rowling`, 336, `No`);
