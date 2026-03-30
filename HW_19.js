let books = [
    {title: "The Hobbit", author: "Tolkien", year: 1937},
    {title: "1984", author: "George", year: 1949},
    {title: "To Kill a Mockingbird", author: "Harper", year: 1960}
]
function getBookTitle(book){
    return book.title
}
console.log(getBookTitle(books[0]))
console.log(getBookTitle(books[1]))