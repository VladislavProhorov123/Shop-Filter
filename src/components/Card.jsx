import React from "react";
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'

export default function Card({product}) {
  const {img, title, prevPrice, newPrice, star} = product
  return (
    <section className="card">
      <img
        src={img}
        alt=""
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="ratings-star" />{" "}
          <AiFillStar className="ratings-star" />{" "}
          <AiFillStar className="ratings-star" />{" "}
          <AiFillStar className="ratings-star" />
          <span className="total-reviews">{star}</span>
        </section>
        <section className="card-price">
          <div className="price">
            {prevPrice && <del>{prevPrice}</del>} ${newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icons" />
          </div>
        </section>
      </div>
    </section>
  );
}
