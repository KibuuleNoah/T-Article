export type Article = {
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
