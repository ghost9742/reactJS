/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
// import cartSVG from "./assets/shopping-cart-outline-svgrepo-com.svg";
import tshirtSVG from "./assets/t-shirt-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function App() {
  const tShirts = [
    {
      id: 0,
      color: "#2EC0F9",
      name: "TShirt-Blue1",
      price: 10,
    },
    {
      id: 1,
      color: "#67AAF9",
      name: "TShirt-Blue2",
      price: 11,
    },
    {
      id: 2,
      color: "#9BBDF9",
      name: "TShirt-Blue3",
      price: 12,
    },
    {
      id: 3,
      color: "#C4E0F9",
      name: "TShirt-Blue4",
      price: 13,
    },
    {
      id: 4,
      color: "#B95F89",
      name: "TShirt-Pink",
      price: 14,
    },
    {
      id: 5,
      color: "#c45050",
      name: "TShirt-Red",
      price: 15,
    },
  ];

  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [isFlashing, setIsFlashing] = useState(false);

  // cart menu open/close
  function onSetMenu() {
    setMenu((menu) => !menu);
  }

  // update cart items
  function onSetCart(item) {
    setCart([...cart, item]);
    // cart icon green color flash when item to the cart is added
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 1500);
  }

  // remove cart items
  function onRemoveFromCart(itemIndex) {
    // setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
    const updatedCart = cart.filter((_, index) => index !== itemIndex);
    setCart(updatedCart);
    // close cart menu if there is no items inside of it
    if (updatedCart.length === 0) {
      setMenu(false);
    }
  }

  return (
    <div className="shop">
      <Navigation
        menu={menu}
        onSetMenu={onSetMenu}
        cart={cart}
        onRemoveFromCart={onRemoveFromCart}
        isFlashing={isFlashing}
      />
      <ShopItems tShirts={tShirts} onSetCart={onSetCart} />
    </div>
  );
}

function Navigation({ menu, onSetMenu, cart, onRemoveFromCart, isFlashing }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);
  {
    /* <i class="fa-solid fa-cart-shopping"></i>; */
  }
  return (
    <nav className="navigation">
      <h1>TShirt-Shop</h1>
      <FontAwesomeIcon
        onClick={onSetMenu}
        className={`cart-icon ${isFlashing ? "flash" : ""}`}
        icon={faCartShopping}
      />
      {/* <img
        onClick={onSetMenu}
        className={`cart-icon ${isFlashing ? "flash" : ""}`}
        src={cartSVG}
        alt=""
      /> */}
      {menu && (
        <div className="cart">
          {cart.map((item, id) => (
            <div key={id} className="cart-item">
              <div
                className="icon"
                style={{
                  maskImage: `url(${tshirtSVG})`,
                  WebkitMaskImage: `url(${tshirtSVG})`,
                  backgroundColor: item.color,
                  width: "20px",
                  height: "20px",
                }}
              />
              {/* <img
                src={tshirtSVG}
                style={{
                  maskImage: `url(${tshirtSVG})`,
                  WebkitMaskImage: `url(${tshirtSVG})`,
                  backgroundColor: item.color,
                }}
                alt=""
              /> */}
              <p>${item.price}</p>
              <button
                onClick={() => onRemoveFromCart(id)}
                className="close-btn"
              >
                &#10005;
              </button>
            </div>
          ))}

          <p>Total price ${totalPrice}</p>
          <button className="checkout">Checkout</button>
        </div>
      )}
    </nav>
  );
}

function ShopItems({ tShirts, onSetCart }) {
  return (
    <div className="shop-items">
      {tShirts.map((tShirt) => (
        <ShopItem
          key={tShirt.id}
          color={tShirt.color}
          name={tShirt.name}
          price={tShirt.price}
          onSetCart={onSetCart}
        />
      ))}
    </div>
  );
}

function ShopItem({ color, name, price, onSetCart }) {
  const item = { color, name, price };

  return (
    <div className="shop-item">
      <div
        className="shop-icon"
        style={{
          maskImage: `url(${tshirtSVG})`,
          WebkitMaskImage: `url(${tshirtSVG})`,
          backgroundColor: color,
        }}
      />
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={() => onSetCart(item)} className="add-to-cart">
        Add to cart
      </button>
    </div>
  );
}

export default App;
