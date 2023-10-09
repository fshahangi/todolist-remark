import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProducts from "./pages/SingleProducts";
import ContactUs from "./pages/ContactUs";
import MainLayout from "./layout/MainLayout";
import Filter from "./pages/Filter";
import ShowFilter from "./pages/ShowFilter";
import FilterLayout from "./layout/FilterLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />}></Route>
        <Route path="/products" element={<App />}></Route>
        <Route path="/products/:productId" element={<SingleProducts />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
      <Route element={<FilterLayout />}>
        <Route path="/filter" element={<Filter />}>
          <Route index path="/filter/:filter" element={<ShowFilter />}></Route>
          <Route path="/filter/:filter" element={<ShowFilter />}></Route>
          <Route path="/filter/:filter" element={<ShowFilter />}></Route>
        </Route>
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
