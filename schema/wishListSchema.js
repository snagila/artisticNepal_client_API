import mongoose from "mongoose";

const wishListSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  productId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  totalPrice: {
    type: Number,
  },
  sku: {
    type: String,
  },
  availableQuantity: { type: Number },
  thumbnail: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("wishList", wishListSchema);
