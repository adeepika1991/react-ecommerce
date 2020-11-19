import styled from 'styled-components';

export const CartContainer = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 0;

    @media screen and (min-width: 760px) and (max-width: 1100px){   
    width: 80vw;
} 

    @media screen and (min-width: 280px) and (max-width: 560px){   
    width: 100vw;
    padding: 0 auto;
} 


`

export const CartHeader = styled.h2` 
    border-bottom: 2px solid #7B8788;
    padding: 0.5rem;
`

export const CartProductContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CartProduct = styled.div` 
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    box-sizing: border-box;
`

export const CartProductDetail = styled.div` 
    display: flex;
    justify-content: flex-start;

`

export const CartItemDetail = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
    width: 65%;

`
export const ProductSize = styled.div` 
    font-weight: lighter;
    color: #7B8788;
`
export const CartProductControl = styled.div` 
    display: flex;
    justify-content: flex-start;
    margin-top:1rem;
`
export const QuantityButton = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        padding: 2px;
        font-size: 20px;
        margin-right: 15px;
    }
`
export const DecreaseButton = styled.button` 
    border-radius: 5px;
    border: 1px solid #7B8788;
    font-size: 30px;
    padding: 0px 15px;
    margin-right: 15px;

`

export const IncreaseButton = styled.button` 
    border-radius: 5px;
    border: 1px solid #7B8788;
    font-size: 30px;
    padding: 0px 15px;
    margin-right: 4rem;

`

export const RemoveButton = styled.button` 
    background-color: #E8290B;
    color: #ffffff;
    width: 8rem;
`

export const CartFooter = styled.div` 
    margin-top: 1rem;
    margin-bottom:0px;
    padding: 1rem;
    background-color: rgb(235, 195, 64);
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 2rem;

    @media screen and (min-width: 250px) and (max-width: 560px){   
    padding: 0.5rem;
} 

`
