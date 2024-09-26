import gatin from "../assets/img/gatin.jpg";
import PropTypes from "prop-types";

export const Gatin = ({ className }) => {
  return <img src={gatin} alt="Imagen Gato Naranja" className={className} />;
};

Gatin.propTypes = {
  className: PropTypes.string,
};
