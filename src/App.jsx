import { useState } from "react";
import { BOOKSCOLLECTION } from "./mock/data";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = BOOKSCOLLECTION.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 sm:py-10">
      <div className="container mx-auto px-4">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
}
