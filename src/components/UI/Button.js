
function Button({ text, onVisible }) {
  return (
    <button className="btn" onClick={() => onVisible(true)}>{text}</button>
  );
};

export default Button;