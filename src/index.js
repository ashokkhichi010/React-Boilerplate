import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { Box } from "@mui/material";
import { persistor, store } from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize React Query Client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevent refetch on window focus
    },
  },
});

// Reference to the root DOM node
const container = document.getElementById("root");
const root = createRoot(container);

// Render the main app component wrapped with providers for Redux, React Query, and Toast notifications
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <Box>
          {/* Main App Component */}
          <App />

          {/* Toast notifications with the newest notifications appearing at the top */}
          <ToastContainer newestOnTop />
        </Box>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
