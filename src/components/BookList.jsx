import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.length > 0 ? (
        books.map((book, index) => <BookCard key={index} book={book} />)
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No books found.
        </p>
      )}
    </div>
  );
};

export default BookList;
