import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { ProductImpl } from "@/ds";
import { productMap } from "@/db/Products";

const Products: React.FC = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {[...productMap.values()].map((sampleProduct) => (
          <ProductItem key={sampleProduct.pid} {...sampleProduct} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
