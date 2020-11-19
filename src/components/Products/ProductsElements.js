import styled from 'styled-components';

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
    justify-content: center;
    padding: 10px;
    
`

export const Size = styled.div` 
    position: absolute;
    top: 77%;
    left: 0%;
    background: white;
    color: black; 
    width: 102%;
    //visibility: hidden;
    opacity: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
    cursor: default;
    transition: 0.5s ease;
    z-index: 10;
   // height: 22%;

    div{
        font-size: 1rem;
        span{
            border: 1px solid black;
            margin: 5px 2px;
            cursor: pointer;
        }
    }
`

export const ProductCard = styled.div`
    width: 300px;
    box-sizing: border-box;
   // cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    padding:5px;
    &:hover ${Size} {
        opacity: 1;
    } 
`
export const AddToCartButton = styled.button` 
    outline: none;
    cursor: pointer;
    padding: 10px;
    width: 87%;
    font-size: 1rem;
    z-index:100;
    position: absolute;
    left: 9%;
    bottom: 25%;


    &:active {
              background-color: black;
              color: white;
              background-size: 100%;
            }
`

export const ProductDetails = styled.div` 
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
`
export const Brand = styled.div` 
    font-size: 20px;
    font-weight: bold;
`
export const ProductName = styled.div` 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0px;
    font-size: 0.90rem;
`
export const ProductPrice = styled.div` 
    position: relative;
    display: flex;
    justify-content: flex-start;
`
export const NewPrice = styled.div` 
    font-weight: bold;
    font-size: 18px;
`
export const OriginalPrice = styled.div` 
    text-decoration: line-through;
    margin: 0px 10px;
`
export const Discount = styled.div` 
    color: red;
`
