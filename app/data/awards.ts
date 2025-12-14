export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Corporate Excellence in Innovation and Technology",
    organization: "GEF 2025",
    year: 2025,
    description: "Awarded for outstanding contributions to innovation and technology",
  },
];
