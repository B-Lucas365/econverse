import "./styles.scss";

interface Props {
  title: string;
  produtos?: string
}

export const CardInfo = ({ title, produtos }: Props) => {
  const cardHeight = produtos ? "284px" : "350px";
  const cardClass = produtos ? "card-info has-produtos" : "card-info";

  return (
    <div className={cardClass} style={{ height: cardHeight }}>
      <h3>{title}</h3>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>Confira</button>
      </div>
    </div>
  );
};