import { Navigate, Route, Routes } from "react-router-dom";
import { ItemsView } from "../views/ItemsView";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemsView />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
