function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowed = books.map(book => book.borrows.filter(bookS => bookS.returned === false)).filter(empty => empty.length > 0)
  return borrowed.length
}

function getMostCommonGenres(books) {
  let sorted = []
  books.forEach(book => {
    if (sorted.findIndex(x => x.name === book.genre) >= 0){
      sorted[sorted.findIndex(x => x.name === book.genre)].count += 1
    }
    else{
      sorted.push({name: book.genre, count: 1})
    }
  })
  sorted.sort((a, b) => b.count - a.count)
  return sorted.slice(0, 5)
}

function getMostPopularBooks(books) {
  const mostPopular = books.map(book => {
    return {name: book.title, count: book.borrows.length}
  }).sort((a, b) => b.count - a.count).slice(0, 5)
  return mostPopular
}

function getMostPopularAuthors(books, authors) {
  let sorted = []
  const aut = authors.forEach(author => {
    let authorArray = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book =>{
      if (book.authorId === author.id){
        return authorArray.count += book.borrows.length
      }
    })
    sorted.push(authorArray)
  })
  return sorted.sort((a,b) => b.count - a.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
