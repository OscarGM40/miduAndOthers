import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router";

//! Remover enable css source maps
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// el queryClient es quien va a manejar la cache y la configuración que le pase
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client} >
      {/* este CMP siempre debe estar,obviamente,dentro del QueryClientProvider */}
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
