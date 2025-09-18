export default function BankCard({ name, img, desc }) {
  return (
    <article className="card" tabIndex="0" aria-label={name}>
      {img ? (
        <div className="card-logo" aria-hidden>
          <img src={img} alt={`${name} logo`} />
        </div>
      ) : (
        <div className="card-logo"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2L2 7l10 5 10-5-10-5z" fill="#E6EEF8"/></svg></div>
      )}

      <h3 className="card-title">{name}</h3>
      {desc && <p className="card-desc">{desc}</p>}

      <div className="card-cta">
        <button className="btn">Learn more</button>
      </div>
    </article>
  );
}
