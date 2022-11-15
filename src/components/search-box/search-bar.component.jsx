import "./search-box.styles.css";

const SearchBar = ({ className, placeholder, searchBar }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={searchBar}
  />
);

// class SearchBar extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.searchBar}
//       />
//     );
//   }
// }

export default SearchBar;
