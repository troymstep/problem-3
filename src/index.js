import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { NotFound } from "./pages/NotFound";
import { SimpleFormPage } from "./pages/SimpleFormPage";
import { ExampleFormPage } from "./pages/ExampleFormPage";
import { FoodMenu } from "./pages/FoodMenu";
import { PageTemplate } from "./common/PageTemplate";
import { CartProvider } from "./modules/shoppingCart/CartContext";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTemplate />}>
            <Route index element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="example-form" element={<ExampleFormPage />} />
            <Route path="simple-form" element={<SimpleFormPage />} />
            <Route path="menu" element={<FoodMenu />} />
            <Route path="cart" element={<ShoppingCartPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
