import "./main.css";
import { Button, Card, SideBar } from "../../Components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Main = () => {
  const navigate = useNavigate();
  const [formSideBar, setFormSideBar] = useState([]);
  const [card, setCard] = useState([]);

  const handeldel = (index) => {
    card.splice(index, 1);
    setCard([...card]);
  };

  useEffect(() => {
    if (formSideBar.length !== 0) {
      return setCard((card) => [...card, formSideBar]);
    }
  }, [formSideBar]);
  return (
    <>
      <SideBar setOnClick={setFormSideBar} />
      <div className="mainContainer">
        <div className="mainCard">
          {card &&
            card.map((item, index) => {
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
            onClick={() => {
              navigate("/resultado", {
                state: {
                  array: card,
                  freeHours: 50,
                },
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
