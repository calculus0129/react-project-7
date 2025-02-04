import classes from "./Card.module.css";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = (
  props,
) => {
  return (
    <section className={`${classes.card} ${props.className ?? ""}`}>
      {props.children}
    </section>
  );
};

export default Card;
