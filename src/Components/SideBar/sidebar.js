import Button from "../Button";
import "./sidebar.css";

const SideBar = () => {
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
          />
          <label htmlFor="deliveryTime">Hora de entrega</label>
          <input
            type="number"
            max={23}
            min={0}
            id="deliveryTime"
            name="deliveryTime"
            placeholder="0 horas até 23 horas"
          />
          <label htmlFor="runtime">Tempo de execução</label>
          <input
            type="number"
            max={23}
            min={0}
            id="runtime"
            name="runtime"
            placeholder="0 horas até 23 horas"
          />
        </div>
        <Button text="Cadastrar" />
      </div>
    </div>
  );
};

export default SideBar;
