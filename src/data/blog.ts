export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Osobní" | "Technologie" | "Vize" | "YouTube";
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [];