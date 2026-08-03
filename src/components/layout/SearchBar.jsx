import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="hidden lg:flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        className="w-64 px-4 py-2 outline-none"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-3 hover:bg-blue-700 transition"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
