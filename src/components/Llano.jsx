import llano from "../assets/img/llano.jpg";
import PropTypes from "prop-types";

export const Llano = ( {className} ) => {
  return (
   
<img src={llano} alt="Gato Gris"  className={className}/>

  )
}

Llano.propTypes = { 

    className: PropTypes.string

}

/*

import llano from "../assets/img";
import PropTypes from "prop-types";

export const Llano = ({ className }) => {
  return (
    <img
      src={llano}
      alt="Paisaje de los Llanos, Arauca"
      className={className}
    />
  );
};

Llano.propTypes = {
  className: PropTypes.string
};
*/
