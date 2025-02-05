import { Product } from "@/ds";
import Card from "@/components/UI/Card";
import classes from "./ProductItem.module.css";
import { productMap } from "@/db/Products";

const ProductItem: React.FC<{ pid: string }> = (props) => {
  const { pid } = props;
  const { ptitle, pprice, pdesc } = productMap.get(pid)!;

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{ptitle}</h3>
          <div className={classes.price}>${pprice.toFixed(2)}</div>
        </header>
        <p>{pdesc}</p>
        <div className={classes.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
