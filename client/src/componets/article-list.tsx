import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";
import ArticleCard from "./arcticle-card";

const ArticleList = () => {
  const trpc = useTRPC();

  const articlesQuery = useQuery(trpc.article.list.queryOptions());

  if (articlesQuery.isLoading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (articlesQuery.error) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger">Error loading articles.</div>
      </div>
    );
  }

  const articles = articlesQuery.data ?? [];

  return (
    <div className="container py-5">
      <header className="mb-5 text-center">
        <h1 className="display-4 fw-bold">Latest Articles</h1>
        <p className="lead">Insights, tutorials, and stories.</p>
      </header>

      <div className="row g-4">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div key={article.id} className="col-12 col-md-6 col-lg-4">
              <ArticleCard {...article} />
            </div>
          ))
        ) : (
          <div className="col-12 text-center text-muted">
            <p>No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
