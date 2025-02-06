import Card from "@/components/UI/Card";
import classes from "./ProductItem.module.css";
import { productMap } from "@/db/Products";
import { useDispatch } from "react-redux";
import { actions } from "@/store";

const ProductItem: React.FC<{ pid: string }> = (props) => {
  const dispatch = useDispatch();
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
        <div
          className={classes.actions}
          onClick={() =>
            dispatch(actions.cartActions.addProduct({ pid, amount: 1 }))
          }
        >
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
