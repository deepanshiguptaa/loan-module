function CategorySection({ title, items }) {
  return (
    <div className="mb-4">
      <h4 className="mb-3">{title}</h4>
      <div className="row">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="col-md-3 mb-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">{item}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default CategorySection;
