import React, {useContext} from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { FiTrash2 } from 'react-icons/fi';

const CartDetails = ({item}) => {
  const { removeFromCart, increaseAmount, descreaseAmount } = useContext(ShopContext);
  const { id, title, price, amount, image } = item;
  return (
    <div>
      <div className="cart_item">
        <div className="product_details">
          <img src={image} alt="" />
          <div className="product_info">
            <h3>{title}</h3>
            <div onClick={() => removeFromCart(id)} className="cart_item_remove"><FiTrash2 />Remove</div>
          </div>
        </div>
        <div className="quanity">
          <button onClick={() => increaseAmount(id)}>+</button>
          <span>{amount}</span>
          <button onClick={() => descreaseAmount(id)}>-</button>
        </div>
        <div className="price">{price}</div>
        <div className="total">
          {`$ ${parseFloat(price * amount).toFixed(2)}`}
        </div>
      </div>
    </div>
  );
};

export default CartDetails; // Ensure this is present
