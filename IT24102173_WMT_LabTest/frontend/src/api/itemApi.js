import axios from "axios";

// 🔥 base URL (local + deploy support)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ================== ITEMS ==================

// ✅ Get all items
export const getItems = () => API.get("/items");

// ✅ Get single item
export const getItemById = (id) => API.get(`/items/${id}`);

// ✅ Create item (with discountPercentage)
export const createItem = (itemData) =>
  API.post("/items", {
    ...itemData,
    discountPercentage: Number(itemData.discountPercentage || 0),
  });

// ✅ Update item
export const updateItem = (id, itemData) =>
  API.put(`/items/${id}`, {
    ...itemData,
    discountPercentage: Number(itemData.discountPercentage || 0),
  });

// ✅ Delete item
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;