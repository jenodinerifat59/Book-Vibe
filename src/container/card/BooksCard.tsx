import { Itype} from '@/app/type/BookType'
import Image from 'next/image'
import React from 'react'
interface BookProps {
    book : Itype
}
const BooksCard = ({book}:BookProps) => {
  return (
    <div
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition duration-300 hover:shadow-xl"
          >
            {/* Book Image */}
            <div className="relative h-64 w-full">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="object-cover"
              />
            </div>

            {/* Book Information */}
            <div className="p-5">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                {book.bookName}
              </h2>

              <p className="mb-3 text-sm text-gray-500">
                By {book.author}
              </p>

             <div className="flex gap-4 items-center">
                 <svg
                  className="h-3.5 w-3.5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.25l2.91 5.9 6.51.95-4.71 4.59 1.11 6.48L12 17.1l-5.82 3.07 1.11-6.48-4.71-4.59 6.51-.95L12 2.25z" />
                </svg>
                  <span className="text-black font-medium text-lg">{book.rating}</span>
             </div>
              <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
  )
}

export default BooksCard
