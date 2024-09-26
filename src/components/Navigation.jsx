import { Link } from "react-router-dom";
import { Razas } from "./Razas";
import { Gatin } from "./Gatin";
import { Gatin2 } from "./Gatin2";
import { Gatin3 } from "./Gatin3";
import { Gatin4 } from "./Gatin4";

export const Navigation = () => {
  return (
    
      <div className="container thumbnail-container mt-2">
      <Link to="/razas" className="links">
        <figure className="thumbnail-image-size">
          <Razas />
          <figcaption>Razas de Gatos</figcaption>
        </figure>
      </Link>
      <Link to="/gatin" className="links">
        <figure className="thumbnail-image-size">
          <Gatin />
          <figcaption>Bobtail Americano</figcaption>
        </figure>
      </Link>
      <Link to="/gatin2" className="links">
        <figure className="thumbnail-image-size">
          <Gatin2 />
          <figcaption>Bombay</figcaption>
        </figure>
      </Link>
      <Link to="/gatin3" className="links">
        <figure className="thumbnail-image-size">
          <Gatin3 />
          <figcaption>Munchkin</figcaption>
        </figure>
      </Link>
      <Link to="/gatin4" className="links">
        <figure className="thumbnail-image-size">
          <Gatin4 />
          <figcaption>British Shorthair4</figcaption>
        </figure>
      </Link>
    </div>
  );
};

