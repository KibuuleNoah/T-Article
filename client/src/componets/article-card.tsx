import type { Article } from "@t-article/common";
import type React from "react";
import { useApp } from "./hooks/useApp";

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  const { setArticleInDetail, setActiveView } = useApp();
  return (
    <article
      onClick={() => {
        setArticleInDetail(article);
        setActiveView("ArticleDetail");
      }}
      className={`card article-card shadow-sm h-100 ${!article.isPublic ? "opacity-75" : ""}`}
    >
      {/* Show cover image if exists, otherwise a placeholder */}
      <img
        src={"/blog-p.png"}
        className="card-img-top"
        alt={article.title}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          {!article.isPublic && (
            <span className="badge bg-warning text-dark me-2">Draft</span>
          )}
          {article.tags.map((tag) => (
            <span key={tag} className="badge tag-badge me-1">
              {tag}
            </span>
          ))}
        </div>

        <h5 className="card-title fw-bold">{article.title}</h5>

        {article.excerpt && (
          <p className="card-text text-muted small">{article.excerpt}</p>
        )}

        <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center article-meta">
          <span className="small text-muted">
            Updated: {article.updatedAt.toString()}
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
