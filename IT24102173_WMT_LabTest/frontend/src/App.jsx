import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddItemPage from "./pages/AddItemPage.jsx";
import EditItemPage from "./pages/EditItemPage.jsx";

function App() {
  return (
    <>
      {/* 🔥 Navigation bar */}
      <Navbar />

      {/* 🔥 Main container */}
      <main className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Add Item */}
          <Route path="/add-item" element={<AddItemPage />} />

          {/* Edit Item */}
          <Route path="/edit-item/:id" element={<EditItemPage />} />

          {/* 🔥 Optional: 404 page */}
          <Route path="*" element={<h2>Page Not Found ❌</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;