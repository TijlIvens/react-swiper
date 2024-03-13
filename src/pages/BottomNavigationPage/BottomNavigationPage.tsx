import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const pages = [
  { label: "Home", icon: <HomeIcon />, route: "/" },
  { label: "Liked", icon: <FavoriteIcon />, route: "/liked" },
  { label: "Profile", icon: <AccountBoxIcon />, route: "/profile" },
];

export const BottomNavigationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeRoute =
    pages.findIndex((item) => item.route === location.pathname) ?? 0;

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box flexGrow={1} overflow="auto" display="flex" flexDirection="column">
        <Outlet />
      </Box>
      <Paper elevation={4}>
        <BottomNavigation
          showLabels
          value={activeRoute}
          onChange={(event, newValue) => {
            navigate(pages[newValue].route);
          }}
        >
          {pages.map((page) => (
            <BottomNavigationAction
              label={page.label}
              icon={page.icon}
              key={page.label}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
