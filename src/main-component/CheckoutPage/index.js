import React, {Fragment} from 'react';
import Navbar4 from '../../components/Navbar4/Navbar4';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar/scrollbar'
import {connect} from "react-redux";
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2';

const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <Navbar4 topbarNone={'wpo-header-style-1'} hclass={'shop-header'} Logo={Logo}/>
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
