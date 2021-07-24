import style from './Heading.module.css'
import { useHistory } from "react-router-dom";

const Heading = () => {
  const history = useHistory();
  
  const handleRoute = () => {
    history.push("/search");
  }

  return (
    <div className={style.heading}>
      <h1 className={style.h1}>Heading</h1>
      <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a placeat maxime animi pariatur cum cupiditate ipsam voluptas!</p>
      <button className={style.button} onClick={handleRoute}>Search</button>
    </div>
  )
}

export default Heading