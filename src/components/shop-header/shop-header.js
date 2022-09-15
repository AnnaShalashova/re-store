import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./shop-header.css";

const ShopHeader = ({count, total}) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <span className="logo text-dark">ReStore</span>
            </Link>
            <Link to="/cart">
                <span className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {count} items (${total})
                </span>
            </Link>

        </header>
    )
}

const mapStateToProps = ({ shoppingCart: {orderTotal, count}}) => {
    return {
        count,
        total: orderTotal
    }
}

export default connect(mapStateToProps)(ShopHeader);