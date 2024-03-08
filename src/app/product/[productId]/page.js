// import { motion } from "framer-motion";
// import { useRouter } from "next/router";
import { useRouter } from "next/dist/client/router";

import ProductDetail from "../../../components/ProductDetail";

const ProductDetailPage = async ({ params }) => {
  const productDetail = await getProductDetail(params);
  //   const router = useRouter();

  //   if (router.isFallback) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProductDetail product={productDetail} />
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch product IDs from the API
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getProductDetail(params) {
  const { productId } = params;
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    cache: "force-cache",
  });

  const productData = await data.json();
  console.log(productData);
  return productData;
}

export default ProductDetailPage;
