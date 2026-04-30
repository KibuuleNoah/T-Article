import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@t-article/server/src/routers";
import { TRPCProvider } from "./utils/trpc";
import ArticleList from "./componets/article-list";
import { AppProvider } from "./contexts/AppContext";
import type { Article } from "@t-article/common";
import ArticleDetail from "./componets/article-detail";

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

  const [activeView, setActiveView] = useState("ArticleList");
  const [articleInDetail, setArticleInDetail] = useState<Article>();

  const renderContent = () => {
    switch (activeView) {
      case "ArticleList":
        return <ArticleList />;
      case "ArticleDetail":
        return <ArticleDetail />;
      default:
        return <>Home </>;
    }
  };

  return (
    <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppProvider
          data={{
            activeView,
            setActiveView,
            articleInDetail,
            setArticleInDetail,
          }}
        >
          {renderContent()}
        </AppProvider>
      </QueryClientProvider>
    </TRPCProvider>
  );
}

export default App;
