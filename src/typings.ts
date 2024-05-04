export type Feature = {
  title: string;
  description: string;
  videos: string;
};

export type Project = {
  title: string;
  url?: string;
  background: string;
  description: string;
  folder: string;
  features: Feature[];
  tags: string[];
  bookmark: boolean;
  imgs: string[];
  videos: string[];
};
