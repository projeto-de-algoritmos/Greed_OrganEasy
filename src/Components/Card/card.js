import Icons from "../../Assets";
import "./card.css";

const Card = ({ task, deliveryTime, runtime, trash }) => {
  return (
    <div className="cardContainer">
      {trash && <img className="trashImage" alt="trash" src={Icons.trash} />}
      <div className="titleCard">Fazer projeto de PA</div>
      <div className="textCard">Entrega - {20} hrs</div>
      <div className="textCard">Execução - {2} hrs</div>
    </div>
  );
};

export default Card;
