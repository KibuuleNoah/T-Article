import type React from "react";
import { useApp } from "./hooks/useApp";

const ArticleDetail: React.FC = () => {
  const { articleInDetail: article, setActiveView } = useApp();

  return (
    <div className="container py-5" data-bs-theme="dark">
      <nav className="mb-4">
        <a
          onClick={() => setActiveView("ArticleList")}
          className="text-decoration-none d-flex align-items-center"
          style={{ color: "var(--primary-color)" }}
        >
          <span className="me-2">←</span> Back to Articles
        </a>
      </nav>

      <article className="mx-auto" style={{ maxWidth: "800px" }}>
        <header className="mb-5">
          <div className="mb-3">
            {!article.isPublic && (
              <span className="badge bg-warning text-dark me-2">
                Draft Mode
              </span>
            )}
            {article.tags.map((tag) => (
              <span key={tag} className="badge tag-badge me-2">
                #{tag}
              </span>
            ))}
          </div>

          <h1
            className="display-3 fw-bold mb-3"
            style={{ color: "var(--text-main)" }}
          >
            {article.title}
          </h1>

          <div className="article-meta d-flex align-items-center border-bottom pb-4">
            <div className="small">
              <span className="text-muted">Last updated on </span>
              <span style={{ color: "var(--text-main)" }}>
                {article.updatedAt}
              </span>
            </div>
          </div>
        </header>

        {article.coverImage && (
          <div className="mb-5">
            <img
              src={"/blog-p.png"}
              className="img-fluid w-100 shadow-lg"
              alt={article.title}
              style={{
                borderRadius: "var(--border-radius)",
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <section
          className="article-body lh-lg"
          style={{ color: "var(--text-main)", fontSize: "1.1rem" }}
        >
          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        <footer className="mt-5 pt-5 border-top">
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted">Tagged in:</span>
            {article.tags.map((tag) => (
              <a
                key={tag}
                href={`/tags/${tag}`}
                className="btn btn-sm btn-outline-secondary rounded-pill"
              >
                {tag}
              </a>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ArticleDetail;
