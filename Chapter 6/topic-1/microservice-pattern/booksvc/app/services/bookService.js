const authorRepository = require("../repositories/authorRepository")
const bookRepository = require("../repositories/bookRepository")
const publisherRepository = require("../repositories/publisherRepository")

module.exports = {
  async get(id) {
    const book = await bookRepository.find(id);

    if (!book) return null;

    const author = await authorRepository.find(book.authorId);
    const publisher = await publisherRepository.find(book.publisherId); 

    return {
      id: book.id,
      title: book.title,
      author,
      publisher,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    }
  }
}
