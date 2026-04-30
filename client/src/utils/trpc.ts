import { createTRPCContext } from "@trpc/tanstack-react-query";

import type { AppRouter } from "@t-article/server/src/routers";

export const { TRPCProvider, useTRPC, useTRPCClient } =
  createTRPCContext<AppRouter>();
