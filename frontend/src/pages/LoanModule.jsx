import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BankCard from "../components/BankCard";
import assets from "../assets";

export default function LoanModule() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("India");

  const countryData = assets[country];

  // Filter
  const filterItems = (list) =>
    list.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="app-container">
      <SearchBar onSearch={setSearch} onCountryChange={setCountry} />

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Government Schemes</h2>
          <span className="kicker">Popular schemes for {country}</span>
        </div>
        <div className="grid">
          {filterItems(countryData.govtSchemes).map((s,i)=>(
            <BankCard key={i} name={s.name} img={s.img} desc={s.desc}/>
          ))}
        </div>
      </section>

      {/* Repeat sections for PSU & Private */}
    </div>
  );
}
