


export const increaseOrAdd = (cartItems, confirmedProduct) => {
    const newCart = [...cartItems];
    const productIndex = newCart.findIndex((product) => product.id === confirmedProduct.id && product.selected_Size.id === confirmedProduct.selected_Size.id);
    if (productIndex !== -1) {
        newCart[productIndex].quantity += 1;
    } else {
        newCart.push({ ...confirmedProduct })
    }

    return [...newCart];
}

export const decreaseOrRemove = (cartItems, confirmedProduct) => {
    const newCart = [...cartItems];
    const productIndex = newCart.findIndex((product) => product.id === confirmedProduct.id && product.selected_Size.id === confirmedProduct.selected_Size.id);
    if (productIndex !== -1) {
        newCart[productIndex].quantity -= 1;
        return [...newCart];
    }
}

export const remove = (cartItems, confirmedProduct) => {
    const newCart = [...cartItems];
    const removedCart = newCart.filter((product) => !(product.id === confirmedProduct.id && product.selected_Size.id === confirmedProduct.selected_Size.id));

    return [...removedCart];
}