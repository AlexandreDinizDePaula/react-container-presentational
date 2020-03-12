import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { MovieById } from "./components/MovieById/MovieById";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={MovieById} />
  </>
);
