import React from "react";
import ProjectUsageContent from "./ProjectUsageContent";

export const links = [
  {
    id: "Authentication",
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
      {
        label: "Usage",
        to: "/authentication/usage",
        component: <div>xxx</div>,
      },
    ],
  },
  {
    id: "Database",
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
    id: "Analytics",
    path: "/analytics",
    children: [
      {
        label: "HelloWorld",
        to: "/analytics",
        component: <div>xxx</div>,
      },
    ],
  },
  {
    id: "Cost",
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
