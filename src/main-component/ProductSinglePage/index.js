import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import Navbar4 from '../../components/Navbar4/Navbar4';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Logo from '../../images/logo.png'
import Footer2 from '../../components/footer2/Footer2';



const ProductSinglePage =(props) => {
    const { id } = useParams()

    
    const productsArray = api();
    const Allproduct = productsArray

    
    const {addToCart} = props;
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.id === Number(id)))
    }, []);
    
    const item = product[0];

    return(
        <Fragment>
            <Navbar4 topbarNone={'wpo-header-style-1'} hclass={'shop-header'} Logo={Logo}/>
            <PageTitle pageTitle={'Product Single'} pagesub={'Product Single'}/> 
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCart}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Footer2/>
            <Scrollbar/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
