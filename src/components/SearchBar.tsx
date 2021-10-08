import "./SearchBar.css";
import { BiSearch } from "react-icons/bi";
import { FC } from "react";

interface Props {
  setSearch : Function;
}

const SearchBar: FC<Props> = (props) => {
  
  const handleChange = (e: any) => {
    props.setSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <button className="btn-search">
          <BiSearch />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
