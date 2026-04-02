class Book {
    #title;
    #author;
    #year;
    #isAvailable;
    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isAvailable = true;
    }

    get title() {
        return this.#title;
    }
    set title(value) {
        if(!value) return;
        this.#title = value;
        return;
    }

    get author() {
        return this.#author;
    }
    set author(value) {
        if(!value) return;
        this.#author = value;
        return;
    }

    get year() {
        return this.#year;
    }
    set year(value) {
        if(value < 0) return;
        this.#year = value;
        return;
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    borrowBook() {
        if(this.#isAvailable) {
            this.#isAvailable = false;
        } else {
            console.log("The book is already unavailable.");
        }
        return;
    }

    returnBook() {
        if(!this.#isAvailable) {
            this.#isAvailable = true;
        } else {
            console.log("The book is already available.");
        }
        return;
    }

    matchesTitle(word) {
        if(this.#title.includes(word)) {
            return true;
        }
        return false;
    }

    getInfo() {
        let strInfo = `Title:  ${this.#title} ` +
                      `Author: ${this.#author} ` +
                      `Year:  ${this.#year}`;
        return strInfo;
    }
};

class Reader {
    #name;
    #borrowedBooks;
    constructor(name) {
        this.#name = name;
        this.#borrowedBooks = [];
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        if(!value) return;
        this.#name = value;
        return;
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }
    get borrowedBooksCount() {
        return this.#borrowedBooks.length;
    }

    takeBook(book) {
        if(book.isAvailable) {
            this.#borrowedBooks.push(book);
            book.borrowBook();
        } else {
            console.log("The book is already unavailable");
        }
        return;
    }

    giveBackBook(book) {
        this.#borrowedBooks = this.#borrowedBooks.filter(ourBook => ourBook !== book);
        book.returnBook();
        return;
    }

    hasBook(book) {
        if(this.#borrowedBooks.includes(book)) {
            return true;
        }
        return false;
    }

    showBorrowedBooks() {
        return this.#borrowedBooks.map(book => book.title);
    }

    getInfo() {
        let strInfo = `${this.#name} has ${this.#borrowedBooks.length} borrowed books.`;
        return strInfo;
    }
};

class Library {
    #name;
    #books;
    #readers;
    constructor(name) {
        this.#name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        if(!value) return;
        this.#name = value;
        return; 
    }

    get books() {
        return this.#books;
    }
    
    get resders() {
        return this.#readers;
    }

    addBook(book) {
        this.#books.push(book);
        return;
    }

    registerReader(reader) {
        this.#readers.push(reader);
        return;
    }

    findBookByTitle(title) {
        let book = this.#books.find(book => book.title === title);
        if(book) {
            return book;
        }
        return null;
    }

    findBooksByAuthor(authorName) {
        return this.#books.filter(book => book.author === authorName);
    }

    giveBookToReader(title, reader) {
        for(let book of this.#books) {
            if(book.title === title) {
                reader.takeBook(book);
            }
        }
        return;
    }

    acceptBookFromReader(title, reader) {
        for(let book of this.#books) {
            if(book.title === title) {
                reader.giveBackBook(book);
            }
        }
        return;
    }

    showAvailableBooks() {
        return this.#books.filter(book => book.isAvailable === true);
    }

    showAllBooks() {
        return this.#books.map(book => book.getInfo());
    }

    getLibraryInfo() {
        let strInfo = `Center Library: ${this.#books.length} books, ${this.#readers.length} readers`;
        return strInfo;
    }
};


const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());
