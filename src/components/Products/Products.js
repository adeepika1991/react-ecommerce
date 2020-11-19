import { useState } from 'react';
import data from '../../utils/data.json';
import { increaseOrAdd } from '../../utils/utilFunctions'
import { useAtom } from 'jotai';
import { cartAtomWithPersistence, cartAtom } from '../../Atoms'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    ProductContainer,
    ProductCard,
    ProductDetails,
    ProductPrice,
    Brand,
    ProductName,
    NewPrice,
    OriginalPrice,
    Discount,
    Size,
    AddToCartButton
} from './ProductsElements'

const Products = () => {


    const [temporaryCart, setTemporaryCart] = useState({});
    const [, setRealCart] = useAtom(cartAtomWithPersistence);
    const [cartItems] = useAtom(cartAtom);


    const addToRealCart = (product) => {
        const confirmedProductWithSize = { ...temporaryCart[product.id] }
        setRealCart(increaseOrAdd(cartItems, confirmedProductWithSize))
        removeTemporaryCart(product);
    }

    console.log(cartItems);

    const removeTemporaryCart = (product) => {
        if (temporaryCart[product.id]) {
            const emptyTheCart = { ...temporaryCart };
            delete emptyTheCart[product.id];
            setTemporaryCart(emptyTheCart);
        }
    }

    const addTemporaryCart = (product, size) => {
        setTemporaryCart({ ...temporaryCart, [product.id]: { ...product, selected_Size: { ...size }, quantity: 1 } });
    }


    return (
        <ProductContainer>
            {data.map((product) => {
                return (
                    <ProductCard key={product.id} onMouseLeave={() => { removeTemporaryCart(product) }}>
                        <LazyLoadImage
                            effect='blur'
                            height='400px'
                            width='300px'
                            src={product.image_src}
                            alt={product.tag}
                            placeholderSrc={product.image_src || process.env.PUBLIC_URL + './logo512.png'} />
                        <ProductDetails>
                            <Size>
                                <>
                                    <span>Select a size:</span>
                                    <div>
                                        {product.options.map((size) => {
                                            return (
                                                <span onClick={() => addTemporaryCart(product, size)} key={size.id}> {size.value} </span>
                                            )
                                        })}
                                    </div>
                                </>

                                {temporaryCart[product.id] ?
                                    <AddToCartButton onClick={() => { addToRealCart(product) }}>Add to Cart</AddToCartButton>
                                    : <AddToCartButton style={{ display: 'none' }} />
                                }
                            </Size>
                            <Brand>{product.vendor}</Brand>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>
                                <NewPrice>${product.price}</NewPrice>
                                <OriginalPrice>${product.compare_at_price} </OriginalPrice>
                                <Discount> 50% OFF </Discount>
                            </ProductPrice>
                        </ProductDetails>
                    </ProductCard>
                )
            })}

        </ProductContainer>
    )
}

export default Products
