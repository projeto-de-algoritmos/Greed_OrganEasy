import "./result.css";
import { SideBar, Button } from "../../Components";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  return (
    <>
      <SideBar />
      <div className="resultContainer">
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
