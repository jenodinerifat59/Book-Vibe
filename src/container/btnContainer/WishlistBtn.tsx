'use client'
import React, { useContext } from 'react'

import { BookContext } from '@/context/BookContex';
import { BookType } from '@/app/type/BookType';
import { Bounce, toast } from 'react-toastify';

const ReadBtn = ({book}: {book:BookType}) => {
    const {wishlist,setWishlist} = useContext(BookContext)
    const handelClick = ()=>{
        setWishlist([...wishlist,book])
        toast(`${book.bookName} Read section added succesfully`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    }
    console.log(wishlist)
  return (
    <button onClick={()=>handelClick()} className="btn btn-primary btn-lg w-full sm:w-auto px-8"> Add To WistList </button>
  )
}

export default ReadBtn
