import "./result.css";
import { Button, Card } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="resultContainer">
        <div className="textResult">
          {console.log(location.state)}
          {location.state && location.state.array.length > 0
            ? `Abaixo mostra a melhor ordem para realizar suas atividades, com ${location.state.freeHours}
            horas livres`
            : "Nenhuma tarefa foi adicionada"}
        </div>
        <div className="resultCard">
          {location.state &&
            location.state.array.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    task={item.name}
                    deliveryTime={item.delivery}
                    runtime={item.runtime}
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
