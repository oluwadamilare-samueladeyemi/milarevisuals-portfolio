import "./SearchBar.css";

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;