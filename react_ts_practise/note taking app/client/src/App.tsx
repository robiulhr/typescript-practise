import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import Home from "./pages/home";
import Create from "./pages/create";
import Layout from "./layout";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/create", element: <Create /> },
    ],
  },
]);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override Material UI's styles. */}
      <RouterProvider router={router} />
    </StyledEngineProvider>
  );
}

export default App;
