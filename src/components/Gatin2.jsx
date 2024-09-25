import gatin2 from "../assets/img";
import PropTypes from "prop-types";

export const Gatin2 = ( props ) => {
  return (
   
<img src={gatin2} alt="Gato Negro"  className={props}/>

  )
}

Gatin2.protoTypes = { 

    className: PropTypes.string

}