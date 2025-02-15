import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import { ShoppingCart } from 'phosphor-react';
import { fetchCartAsync, selectCart } from '../slices/cartSlice';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  const id = useSelector((state) => state.auth.me.cartId);
  const user = useSelector((state) => state.auth.me)
  const username = useSelector((state) => state.auth.me.username)

let visitorCart = useSelector((state) => state.cart2)

let cart = useSelector(selectCart)

const getCartSize = (cart) => {
  let size = 0;
  for (let i = 0; i < cart.length; i++) {
    size += cart[i].quantity;
  }
  return size;
};


let UserCartSize = getCartSize(cart)

  return (
    <div className='header'>
      <h1 className='siteTitle'>Plants Unlimited</h1>
      <small>Shopping as: <strong>{username || "Guest"}</strong></small>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/products">Home</Link>
            <Link to={`/usercart/${id}`}>
              <ShoppingCart size={28}/>
            <small>({getCartSize(cart)})</small>
            </Link>

            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/products">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to={`/cart`}>
              <ShoppingCart size={28}/>
              <small>({getCartSize(visitorCart)})</small>
            </Link>

          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
