/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const ServiceCard = ({service}) => {
      const{_id,title,price,img}=service
      return (
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>Price:${price}</p>
    <div className="card-actions">
      <Link to={`checkout/${_id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
      );
};

export default ServiceCard;