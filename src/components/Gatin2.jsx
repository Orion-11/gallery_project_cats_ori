import gatin2 from "../assets/img/gatin2.jpg";
import PropTypes from "prop-types";

export const Gatin2 = ( {className} ) => {
  return (
   
<img src={gatin2} alt="Gato Negro"  className={{className}}/>

  )
}

Gatin2.propTypes = { 

    className: PropTypes.string

}