export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export const contactInfo = {
  email: "sam99kupo@gmail.com",
  phone: "+2347068093818",
  resumeUrl: "https://docs.google.com/document/d/1S32rZtUJD5OzGa_bR2XP41cIhDNZDdyLOGEoBPSlMlw/edit?tab=t.0",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olamidesamuel",
    },
    {
      name: "GitHub",
      url: "https://github.com/gold-olar",
    },
    // Add more social links as needed
  ] as SocialLink[],
};
