import MainLayout from "./layouts/main-layout";
import Homepage from "./pages/Homepage";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: Homepage }],
  },
]);

export default router;
