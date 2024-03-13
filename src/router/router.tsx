import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home/Home";
import { BottomNavigationPage } from "../pages/BottomNavigationPage/BottomNavigationPage";
import { LikedPage } from "../pages/Liked/Liked";
import { ProfilePage } from "../pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BottomNavigationPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/liked", element: <LikedPage /> },
      { path: "/profile", element: <ProfilePage /> },
    ],
  },
]);
