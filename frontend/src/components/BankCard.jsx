/* eslint-disable react/prop-types */
export default function BankCard({ name }) {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex align-items-center justify-content-center">
          <h5 className="card-title text-center">{name}</h5>
        </div>
      </div>
    </div>
  );
}
