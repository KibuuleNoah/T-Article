const ArticleCard = () => {
  return (
    <article className="card article-card shadow-sm">
      <img
        src="https://unsplash.com"
        className="card-img-top"
        alt="Cover Image"
      />
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          <span className="badge tag-badge me-1">Engineering</span>
          <span className="badge tag-badge me-1">React</span>
        </div>
        <h5 className="card-title fw-bold">Understanding Clean Architecture</h5>
        <p className="card-text text-muted small">
          Learn how to structure your applications for long-term maintainability
          and scalability.
        </p>

        <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center article-meta">
          <span>Updated: April 30, 2026</span>
          <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
