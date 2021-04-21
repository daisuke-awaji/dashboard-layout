import React from "react";
import ProjectUsageContent from "./components/ProjectUsageContent";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { Pokemons } from "./components/Pokemons";
import ProductivityPage from "./components/ProductivityPage/ProductivityPage";

export type Link = {
  id: string;
  category: string;
  icon: any;
  path: string;
  children: LinkItem[];
};
type LinkItem = {
  label: string;
  to: string;
  component: any;
};
export const links: Link[] = [
  {
    id: "Authentication",
    category: "Develop",
    icon: <PeopleIcon />,
    path: "/authentication",
    children: [
      {
        label: "Pets",
        to: "/authentication",
        component: <Pokemons />,
      },
      {
        label: "Sign-in method",
        to: "/authentication/providers",
        component: <div>xxx</div>,
      },
      {
        label: "Templates",
        to: "/authentication/templates",
        component: <div>xxx</div>,
      },
    ],
  },
  {
    id: "Productivity",
    category: "Develop",
    icon: <DnsRoundedIcon />,
    path: "/productivity",
    children: [
      {
        label: "Data",
        to: "/productivity",
        component: <ProductivityPage />,
      },
    ],
  },
  {
    id: "Storage",
    category: "Develop",
    icon: <PermMediaOutlinedIcon />,
    path: "/storage",
    children: [
      {
        label: "HelloWorld",
        to: "/storage",
        component: <div>xxx</div>,
      },
    ],
  },
  {
    id: "Usage",
    category: "Analytics",
    icon: <SettingsIcon />,
    path: "/usage",
    children: [
      {
        label: "URLごとのAPI実行数",
        to: "/usage",
        component: <div>usage</div>,
      },
    ],
  },

  {
    id: "Cost",
    category: "Cost",
    icon: <AttachMoneyIcon />,
    path: "/cost",
    children: [
      {
        label: "Cost",
        to: "/cost",
        component: <ProjectUsageContent />,
      },
    ],
  },
];

type Categories = { [key: string]: Link[] };

export const categories = links.reduce((prev, current, index) => {
  if (!prev[current.category]) prev[current.category] = [];
  prev[current.category].push(current);
  return prev;
}, {} as Categories);
