function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
}

Book.prototype.getInfo = function() {
            let str = `Title:  ${this.title} \nAuthor: ${this.author} \nYear:   ${this.year}\n`;
            return str;
        }

Book.prototype.borrowBook = function() {
            if(this.isAvailable) {
                this.isAvailable = false;
            }
            else {
                console.log('The book is already unavailable');
            }
            return;
        }

Book.prototype.returnBook = function() {
            if(!this.isAvailable) {
                this.isAvailable = true;
            } else {
                console.log('The book is already here');
                return;
            }
        }

Book.prototype.matchesAuthor = function(authorName) {
            if(this.author.toLowerCase() === authorName.toLowerCase()) return true;
            return false;
        }

Book.prototype.matchesTitle = function(word) {
            if(this.title.includes(word)) return true;
            return false;
        }

function Library() {
    this.books = [];
}

Library.prototype.addBook = function(book) {
        this.books.push(book);
    }

Library.prototype.removeBook = function(title) {
        let ind = this.books.findIndex(book => book.title === title);
        if(ind !== -1) {
            this.books.splice(ind, 1);
        } else {
            console.log("Book not found");
        }
        return;
    }

Library.prototype.findBookByTitle = function(title) {
        return this.books.find(book => book.title === title) ?? null;
    }

Library.prototype.findBooksByAuthor = function(authorName) {
        return this.books.filter(book => book.matchesAuthor(authorName));
    }

Library.prototype.getAvailableBooks = function() {
        return this.books.filter(book => book.isAvailable === true);
    }

Library.prototype.borrowBook = function(title){
        let flag = 0;
        for(let book of this.books) {
            if(book.title === title) {
                book.borrowBook();
                flag = 1;
            }
        }
        if(!flag) {
            console.log("Book not found");
        }
        return;
    }

Library.prototype.returnBook = function(title) {
        let flag = 0;
        for(let book of this.books) {
            if(book.title === title) {
                book.returnBook();
                flag = 1;
            }
        }
        if(!flag) {
            console.log("Book not found");
        }
        return;
    }

Library.prototype.showAllBooks = function() {
        for(let book of this.books) {
            book.getInfo();
        }
    }

Library.prototype.countBooks = function() {
        let count = 0;
        for(let book of this.books) {
            count++;
        }
        return count;
    }

Library.prototype.countAvailableBooks = function() {
        return this.getAvailableBooks().length;
    }

Library.prototype.searchBooks = function(word) {
        return this.books.filter(book => book.matchesTitle(word));
    }

Library.prototype.getOldestBook = function() {
        if(!this.books) {
            return null;
        }

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

