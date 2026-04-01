class Book {
    constructor(title, autor, year) {
        this.title = title;
        this.author = autor;
        this.year = year;
        this.isAvailable = true;
    }

    getInfo() {
        console.log(`Title:  ${this.title} \nAuthor: ${this.author} \nYear:   ${this.year}\n`);
    }

    borrowBook() {
        if(this.isAvailable) {
            this.isAvailable = false;
        }
        else {
            console.log('The book is already unavailable');
        }
        return;
    }

    returnBook() {
        if(!this.isAvailable) {
            this.isAvailable = true;
        } else {
            console.log('The book is already here');
            return;
        }
    }

    matchesAuthor(authorName) {
        if(this.author.toLowerCase() === authorName.toLowerCase()) return true;
        return false;
    }

    matchesTitle(word) {
        if(this.title.includes(word)) return true;
        return false;
    }
};

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books.splice(this.books.findIndex(book => book.title === title), 1);
    }

    findBookByTitle(title) {
        return this.books.find(book => book.title === title) ?? null;
    }

    findBooksByAuthor(authorName) {
        return this.books.filter(book => book.author === authorName);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable === true);
    }

    borrowBook(title){
        for(let book of this.books) {
            if(book.title === title) {
                book.borrowBook();
            }
        }
        return;
    }

    returnBook(title) {
        for(let book of this.books) {
            if(book.title === title) {
                book.returnBook();
            }
        }
        return;
    }

    showAllBooks() {
        for(let book of this.books) {
            book.getInfo();
        }
    }

    countBooks() {
        let count = 0;
        for(let book of this.books) {
            count++;
        }
        return count;
    }

    countAvailableBooks() {
        return this.getAvailableBooks().length;
    }

    searchBooks(word) {
        return this.books.filter(book => book.title.includes(word));
    }

    getOldestBook() {
        let oldestBook;
        let minYear = Number.MAX_SAFE_INTEGER;
        for(let book of this.books) {
            if(book.year < minYear) {
                minYear = book.year;
                oldestBook = book;
            }
        }
        return oldestBook;
    }
};

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();

