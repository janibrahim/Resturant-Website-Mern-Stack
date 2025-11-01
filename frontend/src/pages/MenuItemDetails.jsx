import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";

const MenuItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // You can later replace this with data from JSON or API
  const menuItems = [
    { id: 1, name: "Quantum Steak", description: "Tender filet mignon with a cryptographic butter glaze. Served with hash-brown potatoes.", price: 35.99, image: "" },
    { id: 2, name: "HashLink Pasta", description: "Homemade black truffle pasta linked with creamy carbonara sauce and pancetta.", price: 22.50, image: "" },
    { id: 3, name: "Blockchain Burger", description: "A secure stack of premium beef, aged cheddar, and decentralized tomato slices.", price: 18.00, image: "" },
    { id: 4, name: "Encryption Salad", description: "Mixed greens tossed in vinaigrette where the dressing is the secret code.", price: 14.75, image: "" },
    { id: 5, name: "Server Farm Fries", description: "Hand-cut, double-fried potatoes, crispy outside, soft inside.", price: 6.50, image: "" },
    { id: 6, name: "API Espresso", description: "A direct, powerful shot of freshly roasted Italian coffee.", price: 4.00, image: "" },
  ];

  const item = menuItems.find((i) => i.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-pink-600">
        <h2 className="text-3xl font-bold mb-4">Item not found 😢</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center py-12 px-4 transition-all duration-700 ease-in-out">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 flex items-center text-pink-600 font-medium hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back
      </button>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full overflow-hidden hover:shadow-pink-200 transition-all duration-500">
        {/* Image */}
        <div className="h-64 bg-pink-100 flex items-center justify-center overflow-hidden">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <p className="text-pink-400 text-lg">No Image Available</p>
          )}
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-3">{item.name}</h1>
          <p className="text-gray-700 mb-6 text-lg">{item.description}</p>
          <p className="text-2xl font-extrabold text-black mb-8">
            ${item.price.toFixed(2)}
          </p>

          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-semibold shadow-md transition-all duration-300 flex items-center justify-center mx-auto">
            <ShoppingCart className="w-5 h-5 mr-2" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetails;
