interface MenuItem {
  name: string;
  path: string;
}

export const ConfigMenu: MenuItem[] = [
  {
    name: "arona.yml",
    path: "/config/arona",
  },
  {
    name: "arona-emergency.yml",
    path: "/config/arona-emergency",
  },
];

export const DatabaseMenu: MenuItem[] = [
  {
    name: "GachaPool",
    path: "/config/arona",
  },
  {
    name: "GachaHistory",
    path: "/config/arona-emergency",
  },
];
