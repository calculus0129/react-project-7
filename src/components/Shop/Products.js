import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'RandSong',
    description: "The first music I ever created.",
  },
  {
    id: 'p2',
    price: 12,
    title: 'laptop',
    description: 'The first laptop I ever used.',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            key={product.id}
            {...product}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
