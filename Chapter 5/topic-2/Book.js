const books = []; // this array is to store the books

class Book {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.coverImage = params.coverImage;
    this.synopsis = params.synopsis;
    this.publisher = params.publisher;
    this.author = params.author;
    this.price = params.price;
  }

  /* List books */
  static list() {
    // return the books
    return books;
  }

  /* Find the book by id of book */
  static find(id) {
    // find the book by id
    const book = books.find((i) => i.id === Number(id));

    // If book not exist
    if (!book) return null;

    // return the book
    return book;
  }

  /* Create new boook */
  static create(params) {
    if (books.length === 0) {
      params.id = 1;
    } else {
      params.id = books[books.length - 1].id + 1;
    }

    // create new instance of book with params
    const book = new this(params);

    // store the new book in the books array
    books.push(book);

    // return the new book
    return book;
  }

  /* Update book by id */
  static update(id, params) {
    // find the book by id
    const book = this.find(id);

    // If book not exist
    if (!book) return null;

    // update the book
    Object.assign(book, params);

    // return the updated book
    return book;
  }

  static delete(id) {
    // find the book by id
    const book = this.find(id);

    // If book not exist
    if (!book) return null;

    // remove the book
    books.splice(books.indexOf(book), 1);

    // return the deleted book
    return book;
  }
}

module.exports = Book;
