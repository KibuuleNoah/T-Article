import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "../utils/trpc";

const ArticleList = () => {
  const trpc = useTRPC();

  const articlesQuery = useQuery(trpc.article.list.queryOptions());

  if (articlesQuery.isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        Users <sub>{articlesQuery.data?.length}</sub>
      </h2>
      <ul>
        {articlesQuery.data?.map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
