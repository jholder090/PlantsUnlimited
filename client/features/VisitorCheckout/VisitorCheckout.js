import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

const visitorCheckout = () => {
  const visitorCart = useSelector((state) => state.cart2);

  const Total = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    visitorCart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    totalPrice = Math.round(totalPrice * 100) / 100;
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <div className="checkout">
        <div className="checkoutHeader">
          <h1 className="checkoutTitle">CHECKOUT</h1>
          <div className="checkoutLoginSignup">
            <div className="checkoutLogin">
              <span>Already have an account?</span>
              <Link to={"/login"}>
                <button className="checkoutAuthButton">Log In</button>
              </Link>
            </div>
            <div className="checkoutSignup">
              <span>Want to create an account?</span>
              <Link to={"/signup"}>
                <button className="checkoutAuthButton">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="checkoutMain">
          <div className="checkoutCart">
            <div className="checkoutCartHeader">
              <h1>Shopping Cart</h1>
              <h3>Total: ${Total().totalPrice}</h3>
              <Link to="/cart">
                <button className="editButton">EDIT CART</button>
              </Link>
            </div>
            <div className='checkoutCartProducts'>
            {visitorCart && visitorCart.length ? visitorCart?.map((item) => {
              return (
                <div className="checkoutProductContainer" key={item.id}>
                  <h2>{item.name}</h2>
                  <h4>${item.price}</h4>
                  <h4>Qty: {item.quantity}</h4>
                  <img className="productImage" src={item.imageUrl} />
                </div>
              );
            }) : "No Items in Cart"}
            </div>
          </div>
          <div className="checkoutPayment">
            <form className="checkoutForm">
              <div className="paymentHeader">Payment Info
              </div>
              <div className='paymentBody'>
                <div className='paymentName'>
                  <label htmlFor="name">Billing Name</label>
                  <input name="name" type="text" placeholder="Billing Name"></input>
                </div>
                <div className='paymentAddress'>
                  <label htmlFor="billingAddress">Billing Address</label>
                  <input name="billingAddress" type="text" placeholder="Billing Address"></input>
                </div>
                <div className='paymentCard'>
                  <label htmlFor="creditCard">Credit Card Info</label>
                  <input name="creditCard" type="text" placeholder="Last 4 of Credit Card"></input>
                </div>
              </div>
              <Link to="/confirmation">
                <button className="checkoutButton">SUBMIT ORDER
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default visitorCheckout;
