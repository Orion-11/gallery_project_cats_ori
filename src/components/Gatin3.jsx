import gatin3 from "../assets/img/gatin3.jpg";
import PropTypes from "prop-types";

export const Gatin3 = ( {className} ) => {
  return (
   
<img src={gatin3} alt="Gato naranja Bb"  className={ className }/>

  )
}

Gatin3.propTypes = { 

    className: PropTypes.string

}