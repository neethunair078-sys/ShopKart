import axios from "axios";
import API_URL from "../api/config";

const updateUserCart = async (userId, cartItems) => {
  try {
    await axios.patch(`${API_URL}/users/${userId}`, {
      cart: cartItems,
    });
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
};

export default updateUserCart;