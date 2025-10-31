import React from "react";
import { ShoppingCart, Eye } from "lucide-react";

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      name: "Quantum Steak",
      description:
        "Tender filet mignon with a cryptographic butter glaze. Served with hash-brown potatoes.",
      price: 35.99,
      image:
        "https://img.freepik.com/free-photo/tuna-salad_74190-6076.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      name: "HashLink Pasta",
      description:
        "Homemade black truffle pasta linked with creamy carbonara sauce and pancetta.",
      price: 22.5,
      image:
        "https://media.istockphoto.com/id/503337620/photo/grilled-halibut-with-spinach-leeks-and-pine-nuts.jpg?s=612x612&w=0&k=20&c=bcrySCiUxAEhyRm8Hd5W9wLvnivMUA7o2xkM-i_lpT8=",
    },
    {
      id: 3,
      name: "Blockchain Burger",
      description:
        "A secure stack of premium beef, aged cheddar, and decentralized tomato slices.",
      price: 18.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9X7Up5J7Dc6xbA9UpLZKYGHpLimMOiJ3ig&s",
    },
    {
      id: 4,
      name: "Encryption Salad",
      description:
        "Mixed greens tossed in vinaigrette where the dressing is the secret code.",
      price: 14.75,
      image:
        "https://img.freepik.com/free-photo/view-delicious-dinner-with-chickens-potatoes-greens-saucepan-gray-plate-dark-color-background-with-free-space_140725-157836.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 5,
      name: "Server Farm Fries",
      description:
        "Hand-cut, double-fried potatoes, crispy outside, soft inside.",
      price: 6.5,
      image: "https://img.freepik.com/free-photo/chicken-dish-restaurant-table_7939-3126.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 6,
      name: "API Espresso",
      description: "A direct, powerful shot of freshly roasted Italian coffee.",
      price: 4.0,
      image: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661887113/indian-food/indian-food-1120x732.jpg",
    },
    {
      id: 7,
      name: "Firewall Chicken",
      description:
        "Spicy grilled chicken breast marinated to protect its juicy core.",
      price: 24.99,
      image: "https://img.freepik.com/free-photo/topview-served-pork-salad-with-cheese-lettuce_8353-10590.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 8,
      name: "Zero-Knowledge Cake",
      description:
        "A rich chocolate layer cake that reveals nothing about its ingredients.",
      price: 9.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzGTIIkhNNhM12zKSGZcUaFMTEwWwMtuZDQ&s",
    },
    {
      id: 9,
      name: "Vector Prawn Cocktail",
      description: "Large tiger prawns arranged in geometric perfection.",
      price: 17.0,
      image: "https://ca-times.brightspotcdn.com/dims4/default/e168b59/2147483647/strip/true/crop/8024x5349+0+0/resize/840x560!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fce%2F35%2Ff902cb2940b28b408ffe09d3bb78%2F973882-martin-draluck-fourth-of-july-part-two-sr0389.jpg",
    },
    {
      id: 10,
      name: "Kernel Soup",
      description: "Warm creamy tomato soup — the foundation of any meal.",
      price: 8.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCk_XZtyNO1LtOcVGYv3ajJpw6jBnP7GKeg&s",
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-black py-16 px-4 transition-all duration-700 ease-in-out">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Our <span className="text-pink-600">Menu Item's</span>
        </h1>
        <p className="text-gray-700 text-lg">
          Explore delicious meals crafted with care and flavor. Choose your
          favorite dish below — fresh, delightful, and made for you!
        </p>
        <div className="flex justify-center px-10 gap-4 mt-6 flex-wrap">
        <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-semibold shadow-md transition-all duration-300">
          View Today's Specials
        </button>
        <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-semibold shadow-md transition-all duration-300">
          View Today's Specials
        </button>
        </div>
      </header>

      {/* Menu Cards */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-pink-200 overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="h-56 bg-pink-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-pink-600 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-700 mb-4 text-sm">{item.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-black">
                    ${item.price.toFixed(2)}
                  </span>

                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-all duration-300 text-sm font-semibold">
                      <ShoppingCart className="w-4 h-4" /> Add
                    </button>
                    <button className="p-2 border border-pink-400 text-pink-600 hover:bg-pink-100 rounded-md transition-all duration-300">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-600">
        <p>End of Menu — More delicious items coming soon 🍰</p>
      </footer>
    </div>
  );
};

export default MenuPage;
