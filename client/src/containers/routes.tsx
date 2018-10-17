import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { TodoPage } from "./pages/TodoPage";
import { AboutPage } from "./pages/AboutPage";
import { PageLayout } from "./layouts/PageLayout";

export const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: () => (<Dashboard />),
    },
    {
        path: "/todo",
        component: () => (<TodoPage title="Todo list"/>),
    },
    {
        path: "/about",
        component: () => (<AboutPage />),
    },
];

export const route = (
    <Switch>
        <Route path="/" component={PageLayout} />
    </Switch>
);
