import Search from '../Search/Search'
import { useHistory } from "react-router-dom";
import style from './Nav.module.css'

const Nav = (props) => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  }
  
  return (
    <div className={style.navigation}>
      <h2 className={style.h2} onClick={handleClick}>My Movie Collection</h2>
      <Search onSubmit={props.onSubmit} onChange={props.onChange}/>
    </div>
  )
}

export default Nav