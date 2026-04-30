import type { Article } from "@t-article/common";
import type React from "react";

const ArticleCard: React.FC<Article> = ({
  title,
  excerpt,
  // coverImage,
  tags,
  updatedAt,
  isPublic,
}) => {
  return (
    <article
      className={`card article-card shadow-sm h-100 ${!isPublic ? "opacity-75" : ""}`}
    >
      {/* Show cover image if exists, otherwise a placeholder */}
      <img
        src={"/blog-p.png"}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          {!isPublic && (
            <span className="badge bg-warning text-dark me-2">Draft</span>
          )}
          {tags.map((tag) => (
            <span key={tag} className="badge tag-badge me-1">
              {tag}
            </span>
          ))}
        </div>

        <h5 className="card-title fw-bold">{title}</h5>

        {excerpt && <p className="card-text text-muted small">{excerpt}</p>}

        <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center article-meta">
          <span className="small text-muted">
            Updated: {updatedAt.toString()}
          </span>
          <a href="#" className="btn btn-sm btn-outline-primary rounded-pill">
            Read More
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
