import "./result.css";
import { Button, Card } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function msToTime(duration) {
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + ":" + minutes;
  }
  return (
    <>
      <div className="resultContainer">
        <div className="textResult">
          {location.state && location.state.array.length > 0
            ? `Abaixo mostra a melhor ordem para realizar suas atividades,
            ${
              location.state.freeHours <= 0
                ? "sem nenhuma hora livre"
                : `com ${msToTime(location.state.freeHours)} horas livres`
            }`
            : "Nenhuma tarefa foi adicionada"}
        </div>
        <div className="resultCard">
          {location.state &&
            location.state.array.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    result
                    task={item.name}
                    deliveryTime={item.delivery}
                    runtime={item.runtime}
                    start={msToTime(item.start)}
                    end={msToTime(item.end)}
                    delay={item.delay}
                    is_late={item.is_late}
                  />
                </div>
              );
            })}
        </div>
        <div className="resultButton">
          <Button
            size="big"
            text="Novamente"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Result;
