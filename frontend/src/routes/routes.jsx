import { Route, Routes } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
