import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../pages/Layout";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import HomePage from "../pages/HomePage";

const StoreRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default StoreRoute;
