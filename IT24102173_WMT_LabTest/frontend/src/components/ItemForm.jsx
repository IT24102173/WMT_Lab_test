import { useEffect, useState } from "react";

function ItemForm({ initialValues, onSubmit, submitText }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
    discountPercentage: "",
    stockQuantity: "",
    brandName: "",
    supplierName: "",
    manufacturerCountry: "",
    manufacturerName: "",
    customerReviewCount: "",
    warrantyPeriod: "",
    color: "",
  });

  // 🔥 load edit values
  useEffect(() => {
    if (initialValues) {
      setFormData({
        name: initialValues.name || "",
        category: initialValues.category || "",
        price: initialValues.price || "",
        description: initialValues.description || "",
        imageUrl: initialValues.imageUrl || "",
        discountPercentage: initialValues.discountPercentage || 0,
        stockQuantity: initialValues.stockQuantity || 0,
        brandName: initialValues.brandName || "",
        supplierName: initialValues.supplierName || "",
        manufacturerCountry: initialValues.manufacturerCountry || "",
        manufacturerName: initialValues.manufacturerName || "",
        customerReviewCount: initialValues.customerReviewCount || 0,
        warrantyPeriod: initialValues.warrantyPeriod || "",
        color: initialValues.color || "",
      });
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 validation
    if (!formData.name || !formData.price) {
      alert("Name and Price are required ❌");
      return;
    }

    onSubmit({
      ...formData,
      price: Number(formData.price),
      discountPercentage: Number(formData.discountPercentage || 0),
      stockQuantity: Number(formData.stockQuantity || 0),
      customerReviewCount: Number(formData.customerReviewCount || 0),
    });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>{submitText}</h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Item Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Discount (%)</label>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>


        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            name="stockQuantity"
            value={formData.stockQuantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Brand Name</label>
          <input
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Supplier Name</label>
          <input
            name="supplierName"
            value={formData.supplierName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Manufacturer Country</label>
          <input
            name="manufacturerCountry"
            value={formData.manufacturerCountry}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label>Manufacturer Name</label>
          <input
            name="manufacturerName"
            value={formData.manufacturerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Customer Review Count</label>
          <input
            type="number"
            name="customerReviewCount"
            value={formData.customerReviewCount}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Warranty Period</label>
          <input
            name="warrantyPeriod"
            value={formData.warrantyPeriod}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label>Model Number</label>
          <input
            name="modelNumber"
            value={formData.modelNumber}
            onChange={handleChange}
          />
        </div>


        <div className="form-group">
          <label>Color</label>
          <input
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>



        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Image URL</label>
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

      </div>

      <button className="btn primary" type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default ItemForm;