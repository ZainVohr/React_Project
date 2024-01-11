import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const localCart = localStorage.getItem("cartItems")

const initialState = {
    cartItems: JSON.parse(localCart) || [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart(state, action) {
            const ItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (ItemIndex >= 0) {
                state.cartItems[ItemIndex].cartQuantity += 1
                state.cartTotalAmount += state.cartItems[ItemIndex].price;
                state.cartTotalQuantity += 1;
                toast.info(`Increased ${state.cartItems[ItemIndex].title} quantity`, {
                    position: "bottom-left",
                });
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                state.cartTotalAmount += tempProduct.price;
                state.cartTotalQuantity += 1;
                toast.success(`${action.payload.title} added to cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeCartItems(state, action) {
            const nextCartItems = state.cartItems.filter((cartItems) => {
                return cartItems.id !== action.payload.id
            })
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.title} removed from cart`, {
                position: "bottom-left",
            });
        },
        decreaseCartItem(state, action) {
            const ItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (state.cartItems[ItemIndex].cartQuantity > 1) {
                state.cartItems[ItemIndex].cartQuantity -= 1
                state.cartTotalAmount -= state.cartItems[ItemIndex].price;
                toast.info(`Decreased ${action.payload.title} cart quantity`, {
                    position: "bottom-left"
                });
            }
            else if (state.cartItems[ItemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((cartItems) => {
                    return cartItems.id !== action.payload.id
                })
                state.cartTotalAmount -= state.cartItems[ItemIndex].price;
                state.cartItems = nextCartItems
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error(`${action.payload.title} removed from cart`, {
                    position: "bottom-left",
                });
            }
        },
        clearCart(state, action) {
            state.cartItems = []
            state.cartTotalAmount = 0
            state.cartTotalQuantity = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`Cart cleared `, {
                position: "bottom-left",
            });
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {

                    const { price, cartQuantity } = cartItem
                    const itemTotal = price * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total

        },
    },
});

export const { addToCart, removeCartItems, decreaseCartItem, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
