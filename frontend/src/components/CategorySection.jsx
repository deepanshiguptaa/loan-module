function CategorySection({ title, items }) {
  return (
    <section className="mb-5">
      <h3 className="fw-bold mb-4 section-title">{title}</h3>
      <div className="row g-4">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="card h-100 shadow-sm border-0 rounded-4 hover-card">
                <img
                  src={item.img}
                  className="card-img-top p-3"
                  alt={item.name}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h6 className="fw-semibold">{item.name}</h6>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No results found.</p>
        )}
      </div>
    </section>
  );
}

export default CategorySection;
