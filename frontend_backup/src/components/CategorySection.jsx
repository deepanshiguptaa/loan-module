function CategorySection({ title, items }) {
  return (
    <div className="mb-5">
      <h4 className="mb-3">{title}</h4>
      <div className="row">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{item.name}</h6>
                  <p className="card-text text-muted">{item.desc}</p>
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
