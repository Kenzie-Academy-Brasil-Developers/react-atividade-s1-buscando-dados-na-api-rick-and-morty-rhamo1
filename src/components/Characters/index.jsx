import CharCard from "../CharCard";
import "./styles.css";

const Characters = ({ list }) => {
  return (
    <div>
      <h1>Personagens</h1>
      <ul className="list">
        {list.map((e) => (
          <li key={e.id} className="card">
            <CharCard name={e.name} img={e.image} status={e.status} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
