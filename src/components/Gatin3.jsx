import gatin3 from "../assets/img";
import PropTypes from "prop-types";

export const Gatin3 = ( props ) => {
  return (
   
<img src={gatin3} alt="Gato naranja Bb"  className={props}/>

  )
}

Gatin3.protoTypes = { 

    className: PropTypes.string

}