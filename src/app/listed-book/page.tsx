"use client";

import { BookContext } from "@/context/BookContex";
import Image from "next/image";
import React, { useContext, useState } from "react";
import type { BookType } from "@/app/type/BookType";

type SortOption = "rating" | "page" | "year";
interface BookContextType{
  readBook: BookType[];
  setReadBook: React.Dispatch<React.SetStateAction<BookType[]>>;
  wishlist: BookType[];
  setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
};

const ListedPage = () => {
  const { readBook, wishlist } : BookContextType = useContext(BookContext);

  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const sortBooks = (books: BookType[]): BookType[] => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "page") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks: BookType[] = sortBooks(readBook);
  const sortedWishlist: BookType[] = sortBooks(wishlist);

  return (
    <div className="container mx-auto">
      {/* Header */}
      <h1 className="w-full rounded-3xl bg-gray-400 py-8 text-center text-2xl font-bold">
        Books
      </h1>

      {/* Sort */}
      <div className="w-full py-8 text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as SortOption)
          }
          className="select select-accent"
        >
          <option value="rating">Rating</option>
          <option value="page">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border">
        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBook.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sortedReadBooks.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sortedWishlist.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type BookCardProps = {
  book: BookType;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Image */}
      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-bold text-gray-800">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Author: {book.author}
        </p>

        <p className="mt-3 font-semibold text-yellow-500">
          ⭐ {book.rating}
        </p>
      </div>
    </div>
  );
};

export default ListedPage;