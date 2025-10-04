/* 
NEW METHOD TO OVERWRITE METADATA LIKE TITTLE
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home" 
}; */
import sampleData from '@/db/sample-data'
import ProductList from '@/components/ui/shared/product/product-list';



const Homepage = () => {
  return ( <>
  <ProductList data={sampleData.products} title='Newest Arrivals' limit={4} />
  </>  );
}
 
export default Homepage;