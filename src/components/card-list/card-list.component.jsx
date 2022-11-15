import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster, index) => {
//           return <Card key={index} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
