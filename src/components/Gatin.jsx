import gatin from "../assets/img";
import PropTypes from "prop-types";

export const Gatin = ( props ) => {
  return (
   
<img src={gatin} alt="Imagen Gato Naranja"  className={props}/>

  )
}

Gatin.protoTypes = { 

    className: PropTypes.string

}