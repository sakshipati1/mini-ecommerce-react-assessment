function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && <button onClick={() => setSearchTerm("")}>Clear</button>}
    </div>
  );
}

export default SearchBar;
