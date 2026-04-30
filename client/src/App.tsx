import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "@t-article/server/src/routers";
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
        <ArticleList />
      </QueryClientProvider>
    </TRPCProvider>
  );
}

export default App;
