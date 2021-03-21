import React from "react";
import ProjectUsageContent from "./ProjectUsageContent";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import SettingsIcon from "@material-ui/icons/Settings";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

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
        label: "Users",
        to: "/authentication",
        component: <div>authentication</div>,
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
    id: "Database",
    category: "Develop",
    icon: <DnsRoundedIcon />,
    path: "/database",
    children: [
      {
        label: "Data",
        to: "/database",
        component: <div>xxx</div>,
      },
      {
        label: "Rule",
        to: "/database/rule",
        component: <div>xxx</div>,
      },
      {
        label: "Backup",
        to: "/database/backup",
        component: <div>xxx</div>,
      },
      {
        label: "Usage",
        to: "/database/usage",
        component: <div>xxx</div>,
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
