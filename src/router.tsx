import MainLayout from "./layouts/main-layout";
import Homepage from "./pages/Homepage";

import { createBrowserRouter } from "react-router";
import CreateRequest from "./pages/CreateRequest";

export enum ERouter {
  CREATE = "/create",
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Homepage },
      { path: ERouter.CREATE, Component: CreateRequest },
    ],
  },
]);

export default router;
