"use client";

import React, { useContext } from "react";
import { BookContext } from "@/context/BookContex";
import type { BookType } from "@/app/type/BookType";
import { Bounce, toast } from "react-toastify";

type WishlistBtnProps = {
  book: BookType;
};

const WishlistBtn = ({ book }: WishlistBtnProps) => {
  const { wishlist, setWishlist } = useContext(BookContext) as {
    wishlist: BookType[];
    setWishlist: React.Dispatch<React.SetStateAction<BookType[]>>;
  };

  const handleClick = () => {
    const alreadyExists = wishlist.some(
      (item: BookType) => item.bookId === book.bookId
    );

    if (alreadyExists) {
      toast.warning(
        `${book.bookName} is already in your wishlist!`,
        {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        }
      );

      return;
    }

    setWishlist([...wishlist, book]);

    toast.success(
      `${book.bookName} added to wishlist successfully!`,
      {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-primary btn-lg w-full px-8 sm:w-auto"
    >
      Add To Wishlist
    </button>
  );
};

export default WishlistBtn;