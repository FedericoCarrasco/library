const library = [
    {
        title: `Harry Potter and the Sorcerer's Stone`,
        author: `J.K. Rowling`,
        pages: 345,
        read: 'Not yet',
    },
    {
        title: `Harry Potter and the Chamber of Secrets`,
        author:`J.K. Rowling`,
        pages: 141,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Prisoner of Azkaban`,
        author:`J.K. Rowling`,
        pages: 180,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Goblet of Fire`,
        author:`J.K. Rowling`,
        pages: 301,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Order of the Phoenix`,
        author:`J.K. Rowling`,
        pages: 412,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Half-Blood Prince`,
        author:`J.K. Rowling`,
        pages: 652,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Deathly Hallows`,
        author:`J.K. Rowling`,
        pages: 316,
        read: `Not yet`,
    },
    {
        title: `Harry Potter and the Cursed Child`,
        author:`J.K. Rowling`,
        pages: 336,
        read: `Not yet`,
    }
];

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
