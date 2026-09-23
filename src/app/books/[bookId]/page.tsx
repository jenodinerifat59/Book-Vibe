import React from "react";
import type { BookType } from "@/app/type/BookType";
import Image from "next/image";
import ReadBtn from "@/container/btnContainer/ReadBtn";
import WishlistBtn from "@/container/btnContainer/WishlistBtn";

export const getBooksData = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  return response.json();
};

interface BpType {
  params: Promise<{
    bookId: string;
  }>;
}

const BookPage = async ({ params }: BpType) => {
  const { bookId } = await params;

  const booksdata: BookType[] = await getBooksData();

  const book = booksdata.find(
    (book: BookType) => book.bookId === Number(bookId)
  );

  if (!book) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Book Not Found</h2>
          <p className="text-base-content/60">
            The book you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">

        {/* Book Image */}
        <figure className="lg:w-2/5 bg-base-200/50 p-8 lg:p-12">
          <Image
            src={book.image}
            alt={book.bookName}
            width={1200}
            height={600}
            className="w-full max-w-sm mx-auto rounded-xl object-cover shadow-lg"
          />
        </figure>

        {/* Book Information */}
        <div className="card-body lg:w-3/5 p-6 md:p-10">

          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            <span className="badge badge-primary badge-outline">
              {book.category}
            </span>

            <span className="text-sm text-base-content/50">
              Published {book.yearOfPublishing}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-base-content/60">
            by{" "}
            <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-3">
            <div className="rating rating-sm">
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={book.rating >= 2}
                readOnly
              />
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={book.rating >= 3}
                readOnly
              />
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={book.rating >= 4}
                readOnly
              />
              <input
                type="radio"
                className="mask mask-star-2 bg-orange-400"
                checked={book.rating >= 5}
                readOnly
              />
            </div>

            <span className="font-semibold">
              {book.rating}/5
            </span>
          </div>

          <div className="divider" />

          {/* Review */}
          <div>
            <h3 className="font-semibold text-lg mb-2">
              About this book
            </h3>

            <p className="text-base-content/70 leading-7">
              {book.review}
            </p>
          </div>

          {/* Book Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">

            <div className="rounded-xl bg-base-200/60 p-4">
              <p className="text-xs text-base-content/50">
                Pages
              </p>
              <p className="font-semibold mt-1">
                {book.totalPages}
              </p>
            </div>

            <div className="rounded-xl bg-base-200/60 p-4">
              <p className="text-xs text-base-content/50">
                Publisher
              </p>
              <p className="font-semibold mt-1">
                {book.publisher}
              </p>
            </div>

            <div className="rounded-xl bg-base-200/60 p-4">
              <p className="text-xs text-base-content/50">
                Published
              </p>
              <p className="font-semibold mt-1">
                {book.yearOfPublishing}
              </p>
            </div>

          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-ghost px-3 py-3"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <div className="card-actions mt-7">
            <ReadBtn book={book}/>

            <WishlistBtn book={book} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookPage;