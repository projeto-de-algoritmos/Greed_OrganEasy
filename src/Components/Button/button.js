import "./button.css";

const Button = ({ text, size, onClick }) => {
  return (
    <>
      {size === "big" ? (
        <button className="buttonContainerBig" onClick={onClick}>
          {text}
        </button>
      ) : (
        <button className="buttonContainer" onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
