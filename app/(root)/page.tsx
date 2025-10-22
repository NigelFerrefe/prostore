import type { Metadata } from "next";
import ProductList from "@/components/ui/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductCarousel from "@/components/ui/shared/product/product.carousel";
import ViewAllProductsBtn from "@/components/view-all-products-btn";

export const metadata: Metadata = {
  title: "Home",
};

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductsBtn />
    </>
  );
};

export default Homepage;
