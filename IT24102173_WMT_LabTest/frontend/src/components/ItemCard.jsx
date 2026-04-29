import { Link } from "react-router-dom";

function ItemCard({ item, onDelete }) {
  // 🔥 ensure discount exists
  const discount = item.discountPercentage || 0;

  // 🔥 calculate final price
  const finalPrice = item.price - (item.price * discount) / 100;

  return (
    <div className="card">
      <img
        src={item.imageUrl || "https://via.placeholder.com/400x220?text=Item"}
        alt={item.name}
        className="card-image"
      />

      <h3>{item.name}</h3>

      <p><strong>Category:</strong> {item.category}</p>

      {/* 🔥 ORIGINAL PRICE */}
      <p>
        <strong>Price:</strong>{" "}
        {discount > 0 ? (
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ${item.price}
          </span>
        ) : (
          `$${item.price}`
        )}
      </p>

      {/* 🔥 DISCOUNT (TASK 02 MAIN PART) */}
      {discount > 0 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Discount: {discount}%
        </p>
      )}

      {/* 🔥 FINAL PRICE */}
      {discount > 0 && (
        <p>
          <strong>Final Price:</strong> ${finalPrice.toFixed(2)}
        </p>
      )}

      <p>{item.description}</p>

      <div className="item-details-mini">
        {item.brandName && <p><strong>Brand:</strong> {item.brandName}</p>}
        {item.stockQuantity !== undefined && <p><strong>Stock:</strong> {item.stockQuantity}</p>}
      </div>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>
          Edit
        </Link>

        <button
          className="btn danger"
          onClick={() => onDelete(item._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;