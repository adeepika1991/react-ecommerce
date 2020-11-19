import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';


export const Nav = styled.nav`

    display: flex;
    height: 50px;
    background: white;
    box-shadow: 0px 0px 2px 0px black;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;   
    }
`

export const NavLogoContainer = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`

export const NavLogo = styled(Link)`
    img {
      height: 30px;
      margin: 10px;
      border-radius: 5px;
      animation: fadeIn 0.3s;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-self: center;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`
export const NavLink = styled(Link)`
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    margin: 10px 7px;
    color: black;
    padding: 1rem;

    &:hover,
      &.active {
        cursor: pointer;
        box-shadow: 0px 3px 0px rgb(249, 50, 03);
      }

      @media screen and (min-width: 250px) and (max-width: 560px){   
    display: none;
} 
`

export const NavFunctions = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`

export const NavCart = styled(Link)`
    
    background-color: dodgerblue;
    padding: 0.5rem;
    font-size:1.25rem;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    margin-right: 25px;
    margin-top: 5px;

`

export const Badge = styled.span`

    border-radius: 50%;
    background-color: red;
    color: white;
    display: inline-block;
    position: absolute;
    right: -4px;
    top: -8px;
    height: 20px;
    font-size: 10px;
    width: 20px;
    text-align: center;
    line-height: 20px;
`





