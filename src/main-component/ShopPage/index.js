import React, {Fragment} from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Navbar4 from '../../components/Navbar4/Navbar4';
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2';

const ShopPage =({ addToCart }) => {

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

    const products = productsArray

    return(
        <Fragment>
            <Navbar4 topbarNone={'wpo-header-style-1'} hclass={'shop-header'} Logo={Logo}/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
              <section className="wpo-shop-page section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              <ShopProduct
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  />
                          </div>
                      </div>
                  </div>
              </section>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);