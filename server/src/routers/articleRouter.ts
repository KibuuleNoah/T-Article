import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import articleData from "./articles.json";

type Article = {
  id: string;
  title: string;
  excerpt?: string; // Short preview for lists/cards
  content: string[]; // Full MDX or HTML
  coverImage?: string; // URL to header image
  tags: string[];
  isPublic: boolean; // Draft vs published state
  createdAt: Date;
  updatedAt: Date;
};

const articles: Article[] = articleData.map((art) => ({
  ...art,
  createdAt: new Date(art.createdAt),
  updatedAt: new Date(art.updatedAt),
}));

console.log(articles[0].createdAt instanceof Date); // true
export const articleRouter = router({
  // Simple check procedure
  status: publicProcedure.query(async () => {
    return "Article service is active";
  }),

  // Get all articles
  list: publicProcedure.query(async () => {
    return articles;
  }),

  // Get specific article by ID
  byId: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;
    return articles.find((a) => a.id === input);
  }),

  // Create a new article
  // create: publicProcedure
  //   .input(
  //     z.object({
  //       title: z.string().min(1),
  //       content: z.string().min(1),
  //     }),
  //   )
  //   .mutation(async (opts) => {
  //     const { input } = opts;
  //     const newArticle: Article = {
  //       id: Math.random().toString(36).substr(2, 9),
  //       ...input,
  //     };
  //     return newArticle;
  //   }),
});

export default articleRouter;
