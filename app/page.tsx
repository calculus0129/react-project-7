"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import Cart from "@/components/Cart";
import Products from "@/components/Shop/Products";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function Home() {
  const isCartOpen = useSelector((state: RootState) => state.ui.isCartOpen);
  return (
    <>
      {isCartOpen && <Cart />}
      <Products />
    </>
  );
}
