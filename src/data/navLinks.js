import {
  FaUserCircle,
  FaCog,
  FaRegBookmark,
} from "react-icons/fa";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/jobs", label: "Jobs" },
  { path: "/company", label: "Companies" },
];

export const userMenuItems = [
  { path: "/profile", label: "Profile", icon: FaUserCircle },
  { path: "/settings", label: "Settings", icon: FaCog },
  { path: "/saved-jobs", label: "Saved Jobs", icon: FaRegBookmark },
];
