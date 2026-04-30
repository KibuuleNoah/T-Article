import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "../../server/src/routers/index";
import { TRPCProvider } from "./utils/trpc";
import ArticleList from "./componets/article-list";
// import ArticleList from "./componets/article-list";

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
        }),
      ],
    }),
  );

  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="container py-5">
          <header className="mb-5 text-center">
            <h1 className="display-4 fw-bold">Latest Articles</h1>
            <p className="lead">Insights, tutorials, and stories.</p>
          </header>

          <ArticleList />
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
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
                  <h5 className="card-title fw-bold">
                    Understanding Clean Architecture
                  </h5>
                  <p className="card-text text-muted small">
                    Learn how to structure your applications for long-term
                    maintainability and scalability.
                  </p>

                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center article-meta">
                    <span>Updated: April 30, 2026</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card article-card shadow-sm">
                <img
                  src="https://unsplash.com"
                  className="card-img-top"
                  alt="Cover Image"
                />
                <div className="card-body d-flex flex-column">
                  <div className="mb-2">
                    <span className="badge tag-badge me-1">Typescript</span>
                  </div>
                  <h5 className="card-title fw-bold">
                    Mastering Advanced Types
                  </h5>
                  <p className="card-text text-muted small">
                    Diving deep into generics, mapped types, and conditional
                    types for robust codebases.
                  </p>

                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center article-meta">
                    <span>Updated: April 28, 2026</span>
                    <a
                      href="#"
                      className="btn btn-sm btn-outline-primary rounded-pill"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <article className="card article-card shadow-sm opacity-75">
                <div className="card-body">
                  <div className="mb-2 text-warning fw-bold small">
                    <i className="bi bi-pencil-square"></i> Draft
                  </div>
                  <h5 className="card-title fw-bold text-muted">
                    Future of AI in Web Dev
                  </h5>
                  <p className="card-text text-muted small">
                    This article is currently under review and will be published
                    shortly.
                  </p>

                  <div className="mt-auto pt-3 border-top article-meta">
                    <span>Created: April 25, 2026</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </TRPCProvider>
  );
}

// // 3. Usage inside components
// function MyComponent() {
//   const trpc = useTRPC();
//
//   // You use the NATIVE TanStack useQuery hook
//   const userQuery = useQuery(
//     trpc.getUser.queryOptions({ id: '1' })
//   );
//
//   if (userQuery.isLoading) return <div>Loading...</div>;
//   return <div>Hello {userQuery.data?.name}</div>;
// }

export default App;
