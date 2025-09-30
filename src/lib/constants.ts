export const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "setting-process", label: "Setting Process" },
  { id: "kpis", label: "KPIs" },
  { id: "implementation", label: "Implementation" },
] as const;

export const CTAS = {
  primary: {
    label: "Access Premium Templates",
    href: "/resources/templates",
  },
  secondary: {
    label: "Access Premium Templates",
    href: "/resources/templates",
  },
  tertiary: {
    label: "Join Our Coaches Community",
    href: "https://community.example.com",
  },
};


export const CALENDAR_URL =
  process.env.NEXT_PUBLIC_CALENDAR_URL ||
  "https://cal.com/sama/a.i-ads-setter-discovery";


