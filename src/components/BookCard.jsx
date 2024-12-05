import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <img
        src={book.images}
        alt={book.title}
        className="w-full h-48 sm:h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4">
        <p className="text-gray-500 text-xs sm:text-sm mb-2">{book.aftor}</p>
        <h1 className="text-base sm:text-lg font-semibold mb-4">
          {book.title}
        </h1>
      </div>
    </div>
  );
};

export default BookCard;
