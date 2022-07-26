import "./main.css";
import { Button, Card, SideBar } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import scheduleTasks from "../../util/ShedulingMinLateness";

const Main = () => {
  const navigate = useNavigate();
  const [formSideBar, setFormSideBar] = useState([]);
  const [tasks, setTasks] = useState([]);

  const handeldel = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const handleSchedule = () => {
    const schedule = scheduleTasks(tasks);
    var hours;

    if (schedule.length === 0) {
      hours = 0;
    } else {
      hours = schedule[schedule.length - 1].end;
    }

    navigate("/resultado", {
      state: {
        array: schedule,
        freeHours: 86400000 - hours, // Diminui o tempo do dia pelo horario da ultima tarefa
      },
    });
  };

  useEffect(() => {
    if (formSideBar.length !== 0) {
      return setTasks((card) => [...card, formSideBar]);
    }
  }, [formSideBar]);
  return (
    <>
      <SideBar setOnClick={setFormSideBar} />
      <div className="mainContainer">
        <div className="mainCard">
          {tasks &&
            tasks.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    trash
                    task={item.name}
                    deliveryTime={item.delivery}
                    runtime={item.runtime}
                    onClick={() => handeldel(index)}
                  />
                </div>
              );
            })}
        </div>
        <div className="mainButton">
          <Button
            size="big"
            text="Organizar"
            onClick={() => handleSchedule()}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
