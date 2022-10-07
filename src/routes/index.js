import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { useSelector } from "react-redux";
import Helmet from "react-helmet";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

import { Error } from "../modules";
import {
  PAGE_ROUTES,
  ACCESS_TYPES,
  LOGIN_ROUTE,
  TASKS_ROUTE,
} from "../constants";
import {
  AuthPrivateRoute,
  DashboardPrivateRoute,
} from "../config/privateRoute";

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_BACKEND_DEV_URL + "/todo/query",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions,
});

const renderRouteSharedLayout = (title, access, component, user) => {
  if (access === ACCESS_TYPES.PRIVATE) {
    if (!!user.isAuthenticated === false) {
      // return <Redirect
      return <Navigate to={LOGIN_ROUTE} replace />;
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>
            {title ? `${title} |` : ""} {process.env.REACT_APP_WEB_TITLE}
          </title>
        </Helmet>

        <DashboardPrivateRoute>{component}</DashboardPrivateRoute>
      </React.Fragment>
    );
  } else {
    if (!!user.isAuthenticated === true) {
      // return <Redirect
      return <Navigate to={TASKS_ROUTE.GET} replace />;
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {title ? `${title} |` : ""} {process.env.REACT_APP_WEB_TITLE}
          </title>
        </Helmet>

        <AuthPrivateRoute>{component}</AuthPrivateRoute>
      </React.Fragment>
    );
  }
};

const PageRoutes = () => {
  const location = useLocation();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ApolloProvider client={client}>
        <Routes>
          {PAGE_ROUTES.map((item, index) => (
            <Route
              path={item.route}
              element={renderRouteSharedLayout(
                item.title,
                item.access,
                item.component,
                user
              )}
              key={index}
            />
          ))}
          <Route path="*" element={<Error />} />
        </Routes>
      </ApolloProvider>
    </>
  );
};

export default PageRoutes;
