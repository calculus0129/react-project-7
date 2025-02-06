import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { productMap } from "@/db/Products";

const Products: React.FC = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {[...productMap.values()].map((sampleProduct) => (
          <ProductItem key={sampleProduct.pid} pid={sampleProduct.pid} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
