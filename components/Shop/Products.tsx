import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { ProductImpl } from "@/ds";

const sampleProduct = ProductImpl.create(
  "Test Product",
  new Date(),
  "This is a first test product - amazing!",
  6,
);

const Products: React.FC = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem {...sampleProduct} />
      </ul>
    </section>
  );
};

export default Products;
