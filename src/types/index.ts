export interface TechCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}
