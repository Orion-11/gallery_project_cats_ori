import { Link } from "react-router-dom";
import { Llano } from "./Llano";
import { Gatin } from "./Gatin";
import { Gatin2 } from "./Gatin2";
import { Gatin3 } from "./Gatin3";
import { Gatin4 } from "./Gatin4";

export const Navigation = () => {
  return (
    
      <div className="container thumbnail-container mt-2">
      <Link to="/llano" className="links">
        <figure className="thumbnail-image-size">
          <Llano />
          <figcaption>Llanos</figcaption>
        </figure>
      </Link>
      <Link to="/gatin" className="links">
        <figure className="thumbnail-image-size">
          <Gatin />
          <figcaption>Gatin</figcaption>
        </figure>
      </Link>
      <Link to="/gatin2" className="links">
        <figure className="thumbnail-image-size">
          <Gatin2 />
          <figcaption>Gatin2</figcaption>
        </figure>
      </Link>
      <Link to="/gatin3" className="links">
        <figure className="thumbnail-image-size">
          <Gatin3 />
          <figcaption>Gatin3</figcaption>
        </figure>
      </Link>
      <Link to="/gatin4" className="links">
        <figure className="thumbnail-image-size">
          <Gatin4 />
          <figcaption>Gatin4</figcaption>
        </figure>
      </Link>
    </div>
  );
};

/*
***** Navigation.jsx ****
import { Link } from 'react-router-dom';
import { Covenas1 } from './Covenas1';
import { Covenas2 } from './Covenas2';
import { Covenas3 } from './Covenas3';
import { Covenas4 } from './Covenas4';
import { Covenas5 } from './Covenas5';
import { Covenas6 } from './Covenas6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/covenas1' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas1 />
          <figcaption>Coveñas 1</figcaption>
        </figure>
      </Link>
      <Link to='/covenas2' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas2 />
          <figcaption>Coveñas 2</figcaption>
        </figure>
      </Link>
      <Link to='/covenas3' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas3 />
          <figcaption>Coveñas 3</figcaption>
        </figure>
      </Link>
      <Link to='/covenas4' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas4 />
          <figcaption>Coveñas 4</figcaption>
        </figure>
      </Link>
      <Link to='/covenas5' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas5 />
          <figcaption>Coveñas 5</figcaption>
        </figure>
      </Link>
      <Link to='/covenas6' className='links'>
        <figure className='thumbnail-image-size'>
          <Covenas6 />
          <figcaption>Coveñas 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
*/
