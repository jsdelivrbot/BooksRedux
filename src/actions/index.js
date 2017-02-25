export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED', // Always uppercase 
    payload: book
  };
}
