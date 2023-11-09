import {DownloadIcon} from "@radix-ui/react-icons";

export const mainMenu = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  // TODO: Add CV Download Link
  {
    title: "Download CV",
    path: "/resume",
    icon: DownloadIcon,
  },
];
