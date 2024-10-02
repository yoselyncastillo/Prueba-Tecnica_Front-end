import { Routes, Route, Navigate } from "react-router-dom";
import { SearchPage, UserPage } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/search" element={<SearchPage />} />
      <Route path="/user/:id" element={<UserPage />} />

      <Route path="/*" element={<Navigate to="/search" />} />
    </Routes>
  );
};
