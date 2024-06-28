import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./mui/theme";
import App from "./App";

import "./styles/index.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  // uri: "https://api-ca-central-1.hygraph.com/v2/clxoet623020p07wgho256vcn/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
