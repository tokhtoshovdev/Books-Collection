import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
    >
      <input
        type="text"
        placeholder="Search for books..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full sm:max-w-lg px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
};

export default SearchBar;
