import Icons from "../../Assets";
import "./card.css";

const Card = ({ task, deliveryTime, runtime, trash, onClick }) => {

  return (
    <div className="cardContainer">
      {trash && (
        <img
          className="trashImage"
          alt="trash"
          src={Icons.trash}
          onClick={onClick}
        />
      )}
      <div className="titleCard">{task}</div>
      <div className="textCard">Entrega - {deliveryTime} hrs</div>
      <div className="textCard">Execução - {runtime} hrs</div>
    </div>
  );
};

export default Card;
