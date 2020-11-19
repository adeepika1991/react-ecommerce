import { atom } from 'jotai';


const cartAtom = atom(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

const cartAtomWithPersistence = atom(
    get => get(cartAtom),
    (get, set, cartItems) => {
        set(cartAtom, cartItems)
        localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []))
    },
)


const quantityAtom = atom((get) => get(cartAtom).reduce((acc, product) => acc + product.quantity, 0));

const totalPriceAtom = atom((get) => get(cartAtom).reduce((acc, product) => acc + (product.price * product.quantity), 0));


export { cartAtom, cartAtomWithPersistence, quantityAtom, totalPriceAtom };