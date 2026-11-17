export interface SocialLink {
  label: string;
  href: string;
}

export interface Club {
  name: string;
  city: string;
  slogan: string;
  address: string;
  phone: string;
  email: string;
  officeHours: string;
  vatNumber: string;
  socials: SocialLink[];
}
