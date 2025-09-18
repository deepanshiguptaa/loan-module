export default function BankCard({ name, img, desc }) {
  return (
    <article
      className="card h-100 shadow-sm border-0 rounded-4 hover-card"
      tabIndex="0"
      aria-label={name}
    >
      <div className="card-body text-center d-flex flex-column justify-content-between">
        {img ? (
          <div className="mb-3">
            <img
              src={img}
              alt={`${name} logo`}
              className="img-fluid"
              style={{ maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        ) : (
          <div className="placeholder-logo mb-3">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E6EEF8" />
            </svg>
          </div>
        )}

        <h5 className="fw-bold text-dark">{name}</h5>
        {desc && <p className="text-muted small">{desc}</p>}

        <div className="mt-3">
          <button className="btn btn-primary rounded-pill px-4">Learn More</button>
        </div>
      </div>
    </article>
  );
}
