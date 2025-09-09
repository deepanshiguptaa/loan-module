import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BankCard from "../components/BankCard";

export default function LoanModule() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");

  // Data
  const govtSchemes = ["Startup India", "PMMY", "Mudra Yojna"];
  const publicBanks = ["SBI", "PNB", "Union"];
  const privateBanks = ["HDFC", "ICICI", "Axis"];

  // Filter by search
  const filterItems = (list) =>
    list.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 space-y-8">
      {/* Top search & country select */}
      <SearchBar onSearch={setSearch} onCountryChange={setCountry} />

      {/* Government Schemes */}
      <div>
        <h2 className="text-xl font-bold mb-4">Government Schemes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filterItems(govtSchemes).map((scheme, i) => (
            <BankCard key={i} name={scheme} />
          ))}
        </div>
      </div>

      {/* Public Sector Banks */}
      <div>
        <h2 className="text-xl font-bold mb-4">Public Sector Banks (PSU)</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filterItems(publicBanks).map((bank, i) => (
            <BankCard key={i} name={bank} />
          ))}
        </div>
      </div>

      {/* Private Banks */}
      <div>
        <h2 className="text-xl font-bold mb-4">Private Banks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filterItems(privateBanks).map((bank, i) => (
            <BankCard key={i} name={bank} />
          ))}
        </div>
      </div>
    </div>
  );
}
