/* 
NEW METHOD TO OVERWRITE METADATA LIKE TITTLE
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home" 
}; */
import ProductList from '@/components/ui/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';


const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const mappedProducts = latestProducts.map(product => ({
    ...product,
    price: product.price.toString(),
    createdAt: product.createdAd, // map createdAd to createdAt
    rating: typeof product.rating === 'number' ? product.rating : Number(product.rating), // ensure rating is a number
  }));
  return ( <>
  <ProductList data={mappedProducts} title='Newest Arrivals' limit={4} />
  </>  );
}
 
export default Homepage;