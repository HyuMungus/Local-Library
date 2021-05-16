function findAccountById(accounts, id) {
  const accID = accounts.find(account => account.id === id)
  return accID
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lnAcc1, lnAcc2) => (lnAcc1.name.last.toLowerCase() > lnAcc2.name.last.toLowerCase() ? 1 : -1))
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  books.forEach(book => { 
    book.borrows.forEach((borrow) => { 
      if (account.id === borrow.id) {
        count += 1
      }
    })
  })
  return count
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = []
  books.forEach(book =>{
    if (book.borrows.find(book1 => book1.id === account.id && !book1.returned)){
      booksPossessed.push(book)
    }
  })

  booksPossessed.forEach(book => {
    const aut = authors.find(author => author.id === book.authorId)
    book["author"] = aut
  })
  return booksPossessed
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
