import axios from "axios";

const updateUserCart = async (userId, cartItems) => {
  try {
    await axios.patch(`http://localhost:5000/users/${userId}`, {
      cart: cartItems,
    });
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
};

export default updateUserCart;