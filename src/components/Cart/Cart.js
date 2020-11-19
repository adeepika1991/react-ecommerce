import React from 'react'
import { useAtom } from 'jotai';
import { cartAtom, quantityAtom, totalPriceAtom, cartAtomWithPersistence } from '../../Atoms';
import {
    CartContainer,
    CartHeader,
    CartProductContainer,
    CartItemDetail,
    CartProduct,
    CartProductDetail,
    ProductSize,
    CartProductControl,
    QuantityButton,
    IncreaseButton,
    DecreaseButton,
    RemoveButton,
    CartFooter
} from './CartElements'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Brand, NewPrice, ProductName } from '../Products/ProductsElements';
import { increaseOrAdd, decreaseOrRemove, remove } from '../../utils/utilFunctions';
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {

    const [cartItems] = useAtom(cartAtom);
    const [quantity] = useAtom(quantityAtom);
    const [price] = useAtom(totalPriceAtom);
    const [, setRealCart] = useAtom(cartAtomWithPersistence);





    //console.log(cartItems);

    return (
        <CartContainer>
            <CartHeader>My Cart {quantity > 0 ? `(${quantity})` : ''} </CartHeader>
            <CartProductContainer>
                {cartItems.map((product) => {
                    return (
                        <CartProduct key={uuidv4()}>
                            <CartProductDetail>
                                <LazyLoadImage
                                    efect='blur'
                                    height='120px'
                                    width='100px'
                                    src={product.image_src}
                                    alt={product.tag}
                                    placeholderSrc={product.image_src || process.env.PUBLIC_URL + './logo512.png'} />
                                <CartItemDetail>
                                    <ProductName style={{ fontWeight: 'bold', fontSize: '1rem' }}>{product.name}</ProductName>
                                    <Brand style={{ color: '#7B8788', fontWeight: 'lighter', fontSize: '15px' }}>Seller: {product.vendor} </Brand>
                                    <ProductSize> Size: {product.selected_Size.value} </ProductSize>
                                    <NewPrice>${product.price * product.quantity} </NewPrice>
                                </CartItemDetail>
                            </CartProductDetail>
                            <CartProductControl>
                                <QuantityButton>
                                    <DecreaseButton disabled={product.quantity <= 1} onClick={() => { setRealCart(decreaseOrRemove(cartItems, product)) }}> - </DecreaseButton>
                                    <span>{product.quantity}</span>
                                    <IncreaseButton disabled={product.quantity >= 9} onClick={() => { setRealCart(increaseOrAdd(cartItems, product)) }}> + </IncreaseButton>
                                </QuantityButton>
                                <RemoveButton onClick={() => { setRealCart(remove(cartItems, product)) }}>Remove</RemoveButton>
                            </CartProductControl>
                        </CartProduct>
                    )
                })}

            </CartProductContainer>
            <CartFooter>Total Amount : ${price}</CartFooter>

        </CartContainer>
    )
}

export default Cart
