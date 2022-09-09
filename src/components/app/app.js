import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path ="/cart" element={<CartPage />} />
                <Route path="*" element={<HomePage />} /> 
            </Routes>
        </main>
       
    )
}  

export default App;