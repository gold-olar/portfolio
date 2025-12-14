export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description?: string;
  badgeImage?: string;
}

export const awards: Award[] = [
  {
    id: "1",
    title: "Forbes Technology Council Member",
    organization: "Forbes",
    year: 2025,
    description: "Official member of the Forbes Technology Council, an invitation-only community for world-class CIOs, CTOs, and technology executives.",
  },
  {
    id: "2",
    title: "Corporate Excellence in Innovation and Technology",
    organization: "Global Entrepreneurship Festival",
    year: 2025,
    description: "Awarded for outstanding contributions to innovation and technology",
  },
];
