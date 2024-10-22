import { createBrowserRouter } from "react-router-dom";
import BaseWrapper from "../wrappers/baseWrapper";
import { rootLoader } from "../wrappers/baseWrapper/loader/rootLoader";

export default createBrowserRouter([
    {
      path: "/",
      element: <BaseWrapper/>,
      loader: rootLoader,
      children: [
        {
          path: "/",
          element: <>home</>,
        },
        {
          path: "/about-us",
          element: <>about</>,
        },
      ],
    },
  ]);
  