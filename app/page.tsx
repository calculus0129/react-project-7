import Image from "next/image";
// import styles from "./page.module.css";
import Cart from "@/components/Cart";
import Products from "@/components/Shop/Products";

export default function Home() {
  return (
    <>
      <Cart />
      <Products />
    </>
  );
}
