import "./styles.scss";

interface Props {
  title: string;
}

export const CardInfo = ({ title }: Props) => {
  return (
    <div className="card-info">
      <h3>{title}</h3>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button>Confira</button>
      </div>
    </div>
  );
};
