import PropTypes from "prop-types";
import css from "./Statistics.module.css";
export const Statistics = ({ title, stats }) => {
    return  (
    <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
  
    <ul className={css.stats}> 
    {stats.map(({ id, label, percentage }) =>{
      return(
       <li className={css.stats__item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    
      )
    } )}
     
    </ul>
  </section>
    )
  }

Statistics.propTypes = {
   title: PropTypes.string,
    
    stats: PropTypes.arrayOf(PropTypes.shape(
        {id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         persentage: PropTypes.number.isRequired,  
        },
    )),
  };