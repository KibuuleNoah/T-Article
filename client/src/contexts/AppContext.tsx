import type { Article } from "@t-article/common";
import React, {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export interface AppCtxType {
  activeView: string;
  setActiveView: Dispatch<SetStateAction<string>>;
  articleInDetail: Article;
  setArticleInDetail: Dispatch<SetStateAction<Article>>;
}

export const AppCtx = React.createContext<AppCtxType | undefined>(undefined);

export const AppProvider: React.FC<{
  children: ReactNode;
  data: AppCtxType;
}> = ({ children, data }) => {
  return <AppCtx.Provider value={data}>{children}</AppCtx.Provider>;
};
