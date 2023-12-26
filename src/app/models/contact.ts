export interface Contact {
  phone: number;
  mail: string;
  profiles: {
    name: string;
    icon: string;
    link: string;
  }[];
}
