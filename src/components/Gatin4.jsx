import gatin4 from "../assets/img/gatin4.jpg";
import PropTypes from "prop-types";

export const Gatin4 = ( {className} ) => {
  return (
   
<img src={gatin4} alt="Gato Gris"  className={className}/>

  )
}

Gatin4.propTypes = { 

    className: PropTypes.string

}