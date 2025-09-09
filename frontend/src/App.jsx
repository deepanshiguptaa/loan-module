import { useState } from "react";
import CategorySection from "./components/CategorySection";

function App() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("India");

  // Country-wise data
  const data = {
    India: {
      govtSchemes: ["Startup India", "Mudra Yojana", "Standup India"],
      psuBanks: ["SBI", "PNB", "Canara Bank", "Bank of Baroda"],
      privateBanks: ["HDFC", "ICICI", "Axis Bank", "Kotak Mahindra"],
    },
    USA: {
      govtSchemes: ["SBA Loans", "PPP (Paycheck Protection Program)"],
      psuBanks: ["Federal Reserve", "Bank of America (Govt-backed)"],
      privateBanks: ["JP Morgan Chase", "Wells Fargo", "Citibank"],
    },
    UK: {
      govtSchemes: ["Start Up Loans Scheme", "Enterprise Finance Guarantee"],
      psuBanks: ["Bank of England", "NatWest (Govt-supported)"],
      privateBanks: ["HSBC", "Barclays", "Lloyds"],
    },
    Canada: {
      govtSchemes: ["Canada Small Business Financing Program", "BDC Loans"],
      psuBanks: ["Bank of Canada"],
      privateBanks: ["RBC", "TD Bank", "Scotiabank"],
    },
  };

  // Get data for selected country
  const countryData = data[country];

  // filter by search term
  const filterData = (list) =>
    list.filter((item) => item.toLowerCase().includes(search.toLowerCase()));

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
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>

      {/* Render only selected country's data */}
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

export default App;
