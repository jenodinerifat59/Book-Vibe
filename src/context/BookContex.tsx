'use client'
import React, { createContext, ReactNode, useState } from 'react';

 export const BookContext = createContext({})

const BookProvider = ({children}:{children:ReactNode}) => {
    const [readBook,setReadBook] = useState([])
    const [wishlist,setWishlist] = useState([])
    const sheard = {
        readBook,
        setReadBook,
        wishlist,
        setWishlist
    }
    return (
        <div>
            <BookContext.Provider value = {sheard}>{children}</BookContext.Provider>
        </div>
    );
};

export default  BookProvider;