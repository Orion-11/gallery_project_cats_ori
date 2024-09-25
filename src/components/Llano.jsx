import llano from "../assets/img";
import PropTypes from "prop-types";

export const Llano = ( props ) => {
  return (
   
<img src={llano} alt="Paisaje de los Llanos, Arauca"  className={props}/>

  )
}

Llano.protoTypes = { 

    className: PropTypes.string

}