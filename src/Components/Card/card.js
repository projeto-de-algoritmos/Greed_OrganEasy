import Icons from "../../Assets";
import "./card.css";

const Card = ({
  task,
  deliveryTime,
  runtime,
  start,
  end,
  is_late,
  delay,
  trash,
  result,
  onClick,
}) => {
  function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }

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
      <div className="textCard">Entrega - {msToTime(deliveryTime)} hrs</div>
      <div className="textCard">Execução - {msToTime(runtime)} hrs</div>
      {result && (
        <>
          <div className="textCard">Início - {start} hrs</div>
          <div className="textCard">Fim - {end} hrs</div>
          <div className="textCard">
            {delay <= 0 ? "Tempo Livre" : "Atraso"} -{" "}
            {delay <= 0 ? msToTime(-1 * delay) : msToTime(delay)} hrs
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
