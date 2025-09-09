export default function SearchBar({ onSearch, onCountryChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 rounded-xl shadow">
      <input
        type="text"
        placeholder="Search loan scheme or bank..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 p-2 border rounded-lg w-full"
      />
      <select
        onChange={(e) => onCountryChange(e.target.value)}
        className="p-2 border rounded-lg w-full md:w-auto"
      >
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
      </select>
    </div>
  );
}
