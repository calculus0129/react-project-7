"use client";

import CartButton from "./CartButton";
import classes from "./MainHeader.module.css";

const MainHeader: React.FC = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
