import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blaster from "./Blaster.tsx";
import Builder from "./Builder.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import Playground from "./Playground.tsx";
import { SnackbarProvider } from "notistack";
import AppNavBar from "./AppNavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Builder />,
  },
  {
    path: "/blaster",
    element: <Blaster />,
  },
  { path: "playground", element: <Playground /> },
]);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <React.StrictMode>
      <SnackbarProvider maxSnack={2}>
        <AppNavBar />
        <RouterProvider router={router} />
      </SnackbarProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
