import { useState } from "react";
import CategorySection from "../components/CategorySection";
import assets from "../assets/assets";

export default function LoanModule() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("India");

  const countryData = assets[country];

  const filterData = (list) =>
    list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="container my-4">
      {/* Search & Country Dropdown */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search loan scheme or bank..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {Object.keys(assets).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {countryData && (
        <>
          <CategorySection
            title="Government Schemes"
            items={filterData(countryData.govtSchemes)}
          />
          <CategorySection
            title="Public Sector Banks (PSU)"
            items={filterData(countryData.psuBanks)}
          />
          <CategorySection
            title="Private Banks"
            items={filterData(countryData.privateBanks)}
          />
        </>
      )}
    </div>
  );
}
