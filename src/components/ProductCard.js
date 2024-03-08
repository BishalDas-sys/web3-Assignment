"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { id } = product;
  return (
    <Link href={`/product/${id}`}>
      <motion.div
        className="border border-gray-300 p-4 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:shadow-lg h-full"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="flex justify-center items-center h-40 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-md"
          />
        </motion.div>
        <motion.h2
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {product.title}
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ${product.price.toFixed(2)}
        </motion.p>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
