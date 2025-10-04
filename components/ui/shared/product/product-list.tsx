import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((p: any) => (
            <ProductCard key={p.slug} product={p}/>
          ))}
        </div>
      ) : (
        <div>
          <p>No products founds</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
