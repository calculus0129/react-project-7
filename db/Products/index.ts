import { Product, ProductImpl } from "@/ds";

const sampleProducts: Product[] = [
  ProductImpl.create(
    "Test Product",
    new Date(),
    "This is a first test product - amazing!",
    6,
  ),
];

export const productMap: Map<string, Product> = sampleProducts.reduce(
  (map, product) => {
    map.set(product.pid, product);
    return map;
  },
  new Map<string, Product>(),
);
