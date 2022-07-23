import { useState } from "react";
import Button from "../Button";
import "./sidebar.css";
import TimePicker from "react-time-picker";

const SideBar = ({ setOnClick }) => {
  const [nameTask, setNameTask] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("00:00");
  const [runtime, setRuntime] = useState("00:00");

  const updateForm = () => {
    // Contextual usage
    const time1 = deliveryTime;
    const timeParts1 = time1.split(":");
    const resultDelivery =
      +timeParts1[0] * (60000 * 60) + +timeParts1[1] * 60000;

    const time2 = runtime;
    const timeParts2 = time2.split(":");
    const resultRuntime =
      +timeParts2[0] * (60000 * 60) + +timeParts2[1] * 60000;

    setOnClick({
      name: nameTask,
      delivery: Number(resultDelivery),
      runtime: Number(resultRuntime),
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
          <label htmlFor="deliveryTime">Hora de entrega</label>
          <TimePicker
            id="deliveryTime"
            name="deliveryTime"
            className="inputTime"
            onChange={setDeliveryTime}
            value={deliveryTime}
          />
          <label htmlFor="runtime">Tempo de execução</label>
          <TimePicker
            id="runtime"
            name="runtime"
            className="inputTime"
            onChange={setRuntime}
            value={runtime}
          />
        </div>
        <Button text="Cadastrar" onClick={() => updateForm()} />
      </div>
    </div>
  );
};

export default SideBar;
