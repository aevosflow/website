export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  outcome: string;
  imageUrl: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  readTime: string;
  date: string;
}
