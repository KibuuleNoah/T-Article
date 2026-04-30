import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

import { appRouter } from "./routers";

const server = createHTTPServer({
  middleware: cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
  router: appRouter,
  createContext() {
    return {};
  },
});

server.listen(3000);
console.log("Server listening on http://localhost:3000");
