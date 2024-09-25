import gatin4 from "../assets/img";
import PropTypes from "prop-types";

export const Gatin4 = ( props ) => {
  return (
   
<img src={gatin4} alt="Gato Gris"  className={props}/>

  )
}

Gatin4.protoTypes = { 

    className: PropTypes.string

}