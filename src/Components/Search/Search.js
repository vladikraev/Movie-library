import style from './Search.module.css'

const SearchBar = () => (
  <form action="/" method="get" >
    <input
      type="text"
      id="header-search"
      placeholder="Search by movie title..."
      className={style.searchField}
    />
    <button type="submit" className={style.searchBox}>Search</button>
  </form>
);

export default SearchBar;