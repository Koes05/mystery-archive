import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import MyArchive from "./pages/MyArchive";
import Admin from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "entry/:id", Component: Detail },
      { path: "write", Component: Write },
      { path: "edit/:id", Component: Write },
      { path: "my-archive", Component: MyArchive },
      { path: "admin", Component: Admin },
    ],
  },
]);
