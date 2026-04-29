import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },

    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    imageUrl: {
      type: String,
      default: "",
      trim: true,
    },

    // 🔥 NEW FIELD (Task 02)
    discountPercentage: {
      type: Number,
      required: [true, "Discount percentage is required"],
      min: [0, "Discount cannot be negative"],
      max: [100, "Discount cannot be more than 100"],
      default: 0,
    },


    stockQuantity: {
      type: Number,
      default: 0,
    },

    brandName: {
      type: String,
      trim: true,
    },

    supplierName: {
      type: String,
      trim: true,
    },

    manufacturerCountry: {
      type: String,
      trim: true,
    },


    manufacturerName: {
      type: String,
      trim: true,
    },

    customerReviewCount: {
      type: Number,
      default: 0,
    },

    warrantyPeriod: {
      type: String,
      trim: true,
    },


    modelNumber: {
      type: String,
      trim: true,
    },


    color: {
      type: String,
      trim: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);