import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Product = ({ item, addToCart }) => {

  return (

    <div className="row align-items-center">
          <div className="col col-lg-5 col-12">
              <div className="shop-single-slider">
                  <div className="slider-nav">
                      <div>
                        <Zoom>
                          <img src={ item.proImg ? item.proImg : '' } alt="products"/>
                        </Zoom>
                        </div>
                  </div>
              </div>
          </div>
          <div className="col col-lg-7 col-12">
              <div className="product-details">
                <h2>{item.title}</h2>
                <div className="product-rt">
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  {/* <span>(25 customer reviews)</span> */}
                </div>
                <div className="price">
                  <span className="current">Esto es un blog</span>
                  <span className="old">Aqui hablaremos de un blog</span>
                </div>
                {/* <p>There are many or randomised words which don't look even slightly believable.</p> */}
                <ul>
                  <li>Obejtivo del articulo </li>
                  <li>Objetivo del articulo </li>
                </ul>
                <div className="product-option">
                  <div className="product-row">
                    <div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div> 
  );
};

export default Product;
