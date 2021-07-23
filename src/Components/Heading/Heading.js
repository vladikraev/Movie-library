import style from './Heading.module.css'

const Heading = () => {
  return (
    <div className={style.heading}>
      <h1 className={style.h1}>Heading</h1>
      <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a placeat maxime animi pariatur cum cupiditate ipsam voluptas!</p>
      <button className={style.button}>Search</button>
    </div>
  )
}

export default Heading