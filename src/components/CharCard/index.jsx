import "./styles.css";
const CharCard = ({ name, img, status }) => {
  return (
    <div className={status === "Alive" ? "vivo" : "morto"}>
      <img className="img" src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default CharCard;
