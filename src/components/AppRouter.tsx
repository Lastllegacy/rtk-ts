import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

export const AppRouter: FC = () => {
   const auth = false;
  return (
   <Routes>
      {auth 
         ? privateRoutes.map(route=> (
            <Route key={route.path} path={route.path} element={<route.element />} />
         ))
         : publicRoutes.map(route=> (
            <Route key={route.path} path={route.path} element={<route.element />} />
         ))}
   </Routes>
  )
};

