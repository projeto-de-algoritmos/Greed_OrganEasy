import { useState } from "react";
import Button from "../Button";
import "./sidebar.css";

const SideBar = ({ setOnClick }) => {
  const [nameTask, setNameTask] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [runtime, setRuntime] = useState(0);

  const updateForm = () => {
    setOnClick({
      name: nameTask,
      delivery: Number(deliveryTime),
      runtime: Number(runtime),
    });
  };

  return (
    <div className="sidebarContainer">
      <div className="titleSidebar">Adicione suas tarefas de hoje</div>
      <div className="formContent">
        <div className="formSidebar">
          <label htmlFor="nameTask">Nome da tarefa</label>
          <input
            type="text"
            id="nameTask"
            name="nameTask"
            placeholder="Digite o nome da tarefa"
            onChange={(e) => setNameTask(e.target.value)}
            value={nameTask}
          />
          <label htmlFor="deliveryTime">Hora de entrega (0 à 23 hrs)</label>
          <input
            type="number"
            max={23}
            min={0}
            id="deliveryTime"
            name="deliveryTime"
            placeholder="0 horas até 23 horas"
            onChange={(e) => setDeliveryTime(e.target.value)}
            value={deliveryTime}
            onKeyPress={(event) => {
              event.preventDefault();
            }}
          />
          <label htmlFor="runtime">Tempo de execução (0 à 23 hrs)</label>
          <input
            type="number"
            max={23}
            min={0}
            id="runtime"
            name="runtime"
            placeholder="0 horas até 23 horas"
            onChange={(e) => setRuntime(e.target.value)}
            value={runtime}
            onKeyPress={(event) => {
              event.preventDefault();
            }}
          />
        </div>
        <Button text="Cadastrar" onClick={() => updateForm()} />
      </div>
    </div>
  );
};

export default SideBar;
