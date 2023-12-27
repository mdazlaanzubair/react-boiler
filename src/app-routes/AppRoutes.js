import React from "react";
import { Route, Routes } from "react-router-dom";
import routesList from "./RoutesList";

const AppRoutes = () => {
  return (
    <Routes>
      {routesList.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
