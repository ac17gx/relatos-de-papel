import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { LandingView } from "../views/LandingView";
import { ShopView } from "../views/ShopView";
import { BookDetailView } from "../views/BookDetailView";
import { PaymentView } from "../views/PaymentView";

export const BookRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<LandingView />} />
        <Route path="/book/:id" element={<BookDetailView />} />
        <Route path="/cart" element={<ShopView />} />
        <Route path="/payment/checkout" element={<PaymentView />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </>
  );
};
