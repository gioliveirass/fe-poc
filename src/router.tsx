import MainLayout from "./layouts/main-layout";
import Homepage from "./pages/Homepage";
import CreateRequest from "./pages/CreateRequest";
import DetailRequest from "./pages/DetailRequest";

import { createBrowserRouter } from "react-router";

export enum IRouter {
  HOMEPAGE = "/",
  CREATE = "/create",
  DETAIL = "/detail",
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Homepage },
      { path: IRouter.CREATE, Component: CreateRequest },
      { path: IRouter.DETAIL + "/:requestId", Component: DetailRequest },
    ],
  },
]);

export default router;
