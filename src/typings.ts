export type Feature = {
  title: string;
  description: string;
  video: string;
};

export type Project = {
  title: string;
  url?: string;
  date?: string;
  background: string;
  description: string;
  folder: string;
  features: Feature[];
  tags: string[];
  bookmark: boolean;
  imgs: string[];
  videos: string[];
};
