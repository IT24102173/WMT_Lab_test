import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm.jsx";
import { getItemById, updateItem } from "../api/itemApi.js";

function EditItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 fetch item
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await getItemById(id);

        // ensure discount field exists
        setItem({
          ...data,
          discountPercentage: data.discountPercentage || 0,
        });

      } catch (error) {
        console.error("Failed to fetch item", error);
        alert("Failed to load item ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // 🔥 update item
  const handleUpdate = async (formData) => {
    try {
      const formattedData = {
        ...formData,
        price: Number(formData.price),
        discountPercentage: Number(formData.discountPercentage || 0),
        stockQuantity: Number(formData.stockQuantity || 0),
        customerReviewCount: Number(formData.customerReviewCount || 0),
      };

      await updateItem(id, formattedData);

      alert("Item updated successfully ✅");
      navigate("/");
    } catch (error) {
      console.error("Failed to update item", error);
      alert(
        error?.response?.data?.message || "Failed to update item ❌"
      );
    }
  };

  // 🔥 loading state
  if (loading) return <p>Loading item details...</p>;

  return (
    <ItemForm
      initialValues={item}
      submitText="Update Item"
      onSubmit={handleUpdate}
    />
  );
}

export default EditItemPage;