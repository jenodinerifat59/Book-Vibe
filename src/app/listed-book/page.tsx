'use client'
import { BookContext } from '@/context/BookContex'
import Image from 'next/image'
import React, { useContext } from 'react'

const ListedPage = () => {
    const {readBook,wishlist} = useContext(BookContext)
  return (
    <div className="tabs tabs-border container mx-auto">

  {/* Read Books */}
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label={`Read Books (${readBook.length})`}
    defaultChecked
  />

  <div className="tab-content border-base-300 bg-base-100 p-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {readBook.map((book) => (
        <div
          key={book.bookId}
          className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          {/* Left Image */}
          <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
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
      ))}
    </div>
  </div>


  {/* Wishlist */}
  <input
    type="radio"
    name="my_tabs_2"
    className="tab"
    aria-label={`Wishlist (${wishlist.length})`}
  />

  <div className="tab-content border-base-300 bg-base-100 p-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {wishlist.map((book) => (
        <div
          key={book.bookId}
          className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          {/* Left Image */}
          <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={book.image}
              alt={book.bookName}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
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
      ))}
    </div>
  </div>

</div>
  )
}

export default ListedPage
