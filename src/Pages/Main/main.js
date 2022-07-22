import "./main.css";
import { Button, SideBar } from "../../Components";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <SideBar />
      <div className="mainContainer">
        <div className="mainButton">
          <Button
            size="big"
            text="Organizar"
            onClick={() => {
              navigate("/resultado");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
