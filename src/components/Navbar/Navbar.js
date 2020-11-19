import {
    Nav,
    NavLogoContainer,
    NavLogo,
    NavMenu,
    NavLink,
    NavFunctions,
    NavCart,
    Badge
} from './NavbarElements';
import logo from '../../logo.png';
import { FiShoppingBag } from 'react-icons/fi';
import { quantityAtom } from '../../Atoms';
import { useAtom } from 'jotai'


const Navbar = () => {

    const [countCart] = useAtom(quantityAtom)

    return (
        <>
            <Nav>
                <NavLogoContainer>
                    <NavLogo to='/'>
                        <img src={logo} alt='logo' />
                    </NavLogo>
                </NavLogoContainer>
                <NavMenu>
                    <NavLink to='/'>
                        Shop
                    </NavLink>
                    <NavLink to='/services'>
                        About Us
                    </NavLink>
                    <NavLink to='/contact-us'>
                        Our Stores
                    </NavLink>
                    <NavLink to='/sign-up'>
                        Contact Us
                    </NavLink>
                </NavMenu>
                <NavFunctions>
                    <NavCart to='/cart'>
                        <FiShoppingBag color='white' />
                        <Badge>{countCart}</Badge>
                    </NavCart>
                </NavFunctions>
            </Nav>
        </>
    )
};

export default Navbar                            
