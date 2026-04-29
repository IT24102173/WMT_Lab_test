import { useNavigate } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { createItem } from "../api/itemApi.js";

function AddItemPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    try {
      // 🔥 ensure numbers (VERY IMPORTANT)
      const formattedData = {
        ...formData,
        price: Number(formData.price),
        discountPercentage: Number(formData.discountPercentage || 0),
        stockQuantity: Number(formData.stockQuantity || 0),
        customerReviewCount: Number(formData.customerReviewCount || 0),
      };

      await createItem(formattedData);

      alert("Item added successfully ✅");
      navigate("/");
    } catch (error) {
      console.error("Failed to create item", error);
      alert(
        error?.response?.data?.message || "Failed to create item ❌"
      );
    }
  };

  return (
    <ItemForm
      submitText="Add Item"
      onSubmit={handleCreate}
    />
  );
}

export default AddItemPage;