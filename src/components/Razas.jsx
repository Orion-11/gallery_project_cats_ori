import razas from "../assets/img/razas.jpg";
import PropTypes from "prop-types";

export const Razas = ( {className} ) => {
  return (
   
<img src={razas} alt="Razas de Gatos Adorables"  className={className}/>

  )
}

Razas.propTypes = { 

    className: PropTypes.string

}
