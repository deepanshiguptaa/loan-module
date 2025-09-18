export default function SearchBar({ onSearch, onCountryChange }) {
  return (
    <div className="search-bar shadow-sm rounded-4 p-3 mb-5 d-flex gap-3 align-items-center bg-white">
      <input
        className="form-control rounded-pill px-4"
        type="text"
        placeholder="🔍 Search schemes or banks..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="form-select rounded-pill w-auto"
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
    </div>
  );
}
