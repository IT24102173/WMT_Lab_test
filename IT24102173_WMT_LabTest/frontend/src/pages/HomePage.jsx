import { useEffect, useState } from "react";
import { deleteItem, getItems } from "../api/itemApi.js";
import ItemCard from "../components/ItemCard.jsx";

function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 fetch items
  const fetchItems = async () => {
    try {
      const { data } = await getItems();

      // ensure discount field exists for all items
      const formattedItems = data.map((item) => ({
        ...item,
        discountPercentage: item.discountPercentage || 0,
      }));

      setItems(formattedItems);
    } catch (error) {
      console.error("Failed to fetch items", error);
      alert("Failed to load items ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 delete item
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmed) return;

    try {
      await deleteItem(id);

      // remove item instantly (better UX)
      setItems((prev) => prev.filter((item) => item._id !== id));

      alert("Item deleted successfully 🗑️");
    } catch (error) {
      console.error("Failed to delete item", error);
      alert("Failed to delete item ❌");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <section>
      <div className="hero">
        <h1>Item Details</h1>
        <p>View, manage, edit, and remove items from the inventory.</p>
      </div>

      {loading ? (
        <p>Loading items...</p>
      ) : items.length === 0 ? (
        <p>No items available. Add a new item from the menu.</p>
      ) : (
        <div className="grid">
          {items.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HomePage;