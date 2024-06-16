/** @format */

type ReviewCardProps = {
  id: number;
  clientName: string;
  clientLocation: string;
  clientSource: string;
  clientReview: string;
};

type ExpertiseCardProps = {
  id: number;
  title: string;
  desc: string;
};

type RecommendationCardProps = {
  id: number;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
};

type PortfolioCardProps = {
  id: number;
  projectName: string;
  url: string;
  image: string;
  projectDetail: string;
  technologiesUsed: { tech: string }[];
};

type EduCardProps = {
  id: number;
  title: string;
  degree: string;
  detail: string;
  year: string;
};
type ExpCardProps = {
  id: number;
  title: string;
  role: string;
  url: string;
  desc: string;
  year: string;
  location: string;
};
