// https://www.npmjs.com/package/uuid#uuidv4options-buffer-offset
import { v4 as uuidv4 } from "uuid";

export interface Product {
  pid: string;
  ptitle: string;
  pts: Date;
  pdesc: string;
  pprice: number;
  pimg?: Blob;
}

class ProductImpl implements Product {
  public pts: Date;
  constructor(
    public pid: string,
    public ptitle: string,
    pts: Date,
    public pdesc: string,
    public pprice: number,
    public pimg?: Blob,
  ) {
    this.pts = new Date(pts.getTime()); // Ensure deep copy of Date object
  }

  /** Creates a new product object.
   *
   * @param ptitle
   * @param pts
   * @param pdesc
   * @param pprice
   * @param pimg
   * @returns
   */
  static create(
    ptitle: string,
    pts: Date,
    pdesc: string,
    pprice: number,
    pimg?: Blob,
  ): Product {
    return new ProductImpl(uuidv4(), ptitle, pts, pdesc, pprice, pimg);
  }
  static clone(product: Product): Product {
    return new ProductImpl(
      product.pid,
      product.ptitle,
      product.pts,
      product.pdesc,
      product.pprice,
      product.pimg,
    );
  }
  // static hashCode(product: Product): number {
  //   return ProductImpl.stringHashCode(product.pid);
  // }

  // private static stringHashCode(str: string): number {
  //   let hash = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     const char = str.charCodeAt(i);
  //     hash = (hash << 5) - hash + char;
  //     hash |= 0; // Convert to 32bit integer
  //   }
  //   return hash;
  // }
}

export { ProductImpl };

export type CartState = {
  cart: Record<string, number>; // Acts like a 'typed object'!
};
export type UiState = {
  isCartOpen: boolean;
};
