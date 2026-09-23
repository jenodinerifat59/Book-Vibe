
import BooksCard from "./card/BooksCard";
import { BookType } from "@/app/type/BookType";

export const getBooksData = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");

  return response.json();
};

const Books = async () => {
  const booksData = await getBooksData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">
        Books
      </h2>

      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0,6).map((book:BookType) => (
          <BooksCard key={book.bookId} book={book}/>
        ))}
      </div>
    </div>
  );
};

export default Books;