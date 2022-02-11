export const getBasketTotalPrice = (basket) => {
    return basket?.reduce((totalPrice, item) =>  totalPrice + item.price , 0);
}