export default function SearchBar({ onSearch, onCountryChange }) {
  return (
    <div className="search-card" role="region" aria-label="Search and country selector">
      <input
        className="search-input"
        type="text"
        placeholder="Search schemes or banks..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select className="country-select" onChange={(e) => onCountryChange(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
    </div>
  );
}
