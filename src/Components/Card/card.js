import Icons from "../../Assets";
import "./card.css";

const Card = ({ task, deliveryTime, runtime, start, end, is_late, delay, trash, onClick }) => {

  return (
    <div className={is_late === true ? "cardContainerLate" : "cardContainer"}>
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
      <div className="textCard">Início - {start} hrs</div>
      <div className="textCard">Fim - {end} hrs</div>
      <div className="textCard">{delay <= 0 ? 'Tempo Livre' : 'Atraso'} - {delay <= 0 ? -1 * delay : delay} hrs</div>
    </div>
  );
};

export default Card;
