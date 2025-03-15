import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

/* 
install npm (npm install react-router-dom)

create a default page for routes 

create an error-page for routes

Create a routes.jsx

import & add it to createRoot function in main.jsx

add Link to App.jsx

create 2x new pages to navigate to

*/
