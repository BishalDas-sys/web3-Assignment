import ProductCard from "../components/ProductCard";

const Home = async () => {
  const products = await getProducts();
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getProducts() {
  const data = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });

  const productData = await data.json();
  return productData;
}

export default Home;
