import React from 'react'
import { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductDetails, saveProductDetails } from '../../services/ProductDetails/actions'
import { selectProductDetails, selectProductSaved } from '../../services/ProductDetails/selectors';

function ProductList(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

/*****************************************************************
 * Action : 	 getProductDetails()
 * Description : This action fetches product details on page load
*
******************************************************************/

    useEffect(() => {
        props.actions.getProductDetails();
    }, []);

    
/*****************************************************************
 * Action : 	 getProductDetails()
 * Description : This hook fetches product details again if a new product 
 * is saved
*
******************************************************************/

    useEffect(() => {
        if (props.productSaved) {
            props.actions.getProductDetails();
        }
    }, [props.actions, props.productSaved]);


    const handleSubmit = () => {
        const product = { name, price };
        console.log(product);
        props.actions.saveProductDetails(product);
    }


    return (
        <>
            <form>
                <label htmlFor="name">Enter product name:</label>
                <input type="text" id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <label htmlFor="price">Enter product price:</label>
                <input type="number" id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input type="button" value="Add product" onClick={handleSubmit} />
            </form>
            <section>
                {props.productDetails && <ul>
                    {props.productDetails?.map((product) => {
                        return <li
                            key={product.id}
                        >{product.name}</li>
                    })}
                </ul>}
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        productDetails: selectProductDetails(state),
        productSaved: selectProductSaved(state)
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getProductDetails, saveProductDetails }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

