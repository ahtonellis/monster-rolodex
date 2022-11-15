import "./card-styles.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div key={id} className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div key={id} className="card-container">
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
