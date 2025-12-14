export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
  isCurrent: boolean;
}

export const workHistory: WorkExperience[] = [
  {
    id: "1",
    position: "VP of Product, Fullstack Engineer",
    company: "Edgetrace",
    location: "USA",
    startMonth: "September",
    startYear: 2024,
    isCurrent: true,
  },
  {
    id: "2",
    position: "Senior Backend Engineer",
    company: "Insomnia Labs",
    location: "USA",
    startMonth: "July",
    startYear: 2023,
    endMonth: "October",
    endYear: 2025,
    isCurrent: false,
  },
  {
    id: "3",
    position: "Senior Fullstack Engineer (Founding Engineer)",
    company: "Valley",
    location: "USA",
    startMonth: "January",
    startYear: 2023,
    endMonth: "January",
    endYear: 2025,
    isCurrent: false,
  },
  {
    id: "4",
    position: "Fullstack Engineer",
    company: "Bunny Studio Inc",
    location: "USA",
    startMonth: "August",
    startYear: 2021,
    endMonth: "December",
    endYear: 2022,
    isCurrent: false,
  },
  {
    id: "5",
    position: "Frontend Engineer (Founding engineer)",
    company: "myStash",
    location: "Lagos, Nigeria",
    startMonth: "June",
    startYear: 2021,
    endMonth: "April",
    endYear: 2022,
    isCurrent: false,
  },
];
