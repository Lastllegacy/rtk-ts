import React from "react";
import SignUp from '../components/pages/Login';
import MainPage from "../components/pages/MainPage";
import NavigateToMain from "./NavigateToMain";
import NavigateToLogin from "./NavigateToLogin";
import Login from "../components/pages/Login";


interface IRoutes {
   path: string;
   element: React.ComponentType;
   exact?: boolean;
}

const enum RouteNames {
   LOGIN = '/login',
   MAIN = '/',
}

export const publicRoutes: IRoutes[] = [
   {path: RouteNames.LOGIN, element: Login},
   {path: "*", element: NavigateToLogin},
]

export const privateRoutes: IRoutes[] = [
   {path: RouteNames.MAIN, element: MainPage},
   {path: "/login", element: NavigateToMain},
]