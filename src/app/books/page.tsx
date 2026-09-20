import BooksCard from '@/container/card/BooksCard';
import React from 'react';
import { Itype } from '../type/BookType';
export const getBooksData = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  return response.json();
}
const BookPage = async() => {
    const books = await getBooksData()
    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book:Itype) => (
          <BooksCard key={book.bookId} book={book}/>
        ))}
      </div>
    );
};

export default BookPage;