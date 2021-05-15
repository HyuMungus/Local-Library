function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {        // return double array of books not yet returned and books returned
  let result = []
  const returned = books.filter(book => book.borrows.every(borrow => borrow.returned))
  const notReturned = books.filter(book => book.borrows.some(borrow => !borrow.returned))
  result.push(notReturned)
  result.push(returned)
  return result
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows
  const borrowArray = accounts.filter(account => borrowed.find(transaction => account.id === transaction.id))
  for (let i = 0; i < borrowArray.length; i++){
    for (let x = 0; x < borrowed.length; x++){
        if (borrowed[x].id === borrowArray[i].id) {
        borrowArray[i].returned = borrowed[x].returned;
    }
  }
 }
    return borrowArray.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
