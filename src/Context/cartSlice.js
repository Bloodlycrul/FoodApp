import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },

    reducers : {
        addItems : (state, action )=>{
            state.items.unshift(action.payload)
        },

        removeItem: (state, action) => {
            const indexToRemove = state.items.findIndex(item => item?.card?.info.id === action.payload);
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
        },

        clearCart : (state)=>{
            state.items.length = 0;
        }
    }
})


export const {addItems, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer