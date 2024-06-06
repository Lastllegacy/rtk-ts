import React from "react";
import SignUp from '../components/pages/SignUp';
import MainPage from "../components/pages/MainPage";
import NavigateToMain from "./NavigateToMain";
import NavigateToLogin from "./NavigateToLogin";


interface IRoutes {
   path: string;
   element: React.ComponentType;
   exact?: boolean;
}

const enum RouteNames {
   LOGIN = '/login',
   MAIN = '/'
}

export const publicRoutes: IRoutes[] = [
   {path: RouteNames.LOGIN, element: SignUp},
   {path: "*", element: NavigateToLogin},
]

export const privateRoutes: IRoutes[] = [
   {path: RouteNames.MAIN, element: MainPage},
   {path: "/login", element: NavigateToMain},
]