"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductDetail = ({ product }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);

    // Remove the message after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.slice(1));
    }, 2000);
  };

  const handleAddToCart = () => {
    addMessage("Successfully Added to Cart");
  };

  const handleAddToFavourite = () => {
    addMessage("Successfully Added to Favorite");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="container mx-auto mt-12 p-6 h-screen lg:w-3/4 xl:w-2/3 flex flex-col"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="col-span-1"
          whileHover={{ scale: 1.05 }} // Increase scale on hover
        >
          <div className="flex justify-center items-center h-70 w-70 mb-4">
            <motion.img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
              transition={{ ease: "easeInOut", duration: 0.5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          </div>
        </motion.div>
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-semibold mb-6">{product.title}</h1>
          <p className="text-gray-700 text-lg">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mt-4 text-lg">{product.description}</p>
          <div className="mt-8 flex items-center">
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 mr-4 text-lg"
              whileHover={{ scale: 1.1 }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </motion.button>
            <motion.button
              className="bg-gray-300 px-6 py-3 text-lg"
              whileHover={{ scale: 1.1 }}
              onClick={handleAddToFavourite}
            >
              Favorite
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <div className="fixed top-4 right-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`bg-green-500 text-white p-4 rounded-md mt-2`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            {message}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductDetail;
