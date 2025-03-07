import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const List = React.lazy(() => import("../../../mf-list/src/List"));
const Details = React.lazy(() => import("../../../mf-details/src/Details"));
const Auth = React.lazy(() => import("../../../mf-auth/src/Auth"));

const AppRoutes = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Routes>
      <Route path="/list" element={<List />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
