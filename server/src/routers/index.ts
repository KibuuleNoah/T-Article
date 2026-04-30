import { router } from "../trpc";

import articleRouter from "./articleRouter";

export const appRouter = router({
  article: articleRouter,
});

export type AppRouter = typeof appRouter;
