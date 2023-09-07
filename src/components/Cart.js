import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { MENU_ITEM_IMAGE } from "../utils/contant";
import { useDispatch } from "react-redux";
import { removeItem } from "../Context/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleDelete = (items)=>{
    dispatch(removeItem(items?.card?.info.id))
  }


  return (
    <>
      <div className="text-center font-bold my-10 text-2xl">Cart</div>
      <div className="text-left my-3">
        {cartItem.length === 0 ? (
          <h1>Please Add some Item From the page</h1>
        ) : (
          cartItem.map((items) => {
            console.log(items);
            return <div className=" w-6/12 m-auto my-5 box-border flex justify-between border-b-2 border-indigo-500 py-3">
              {/* Item details section */}
              <div className="w-8/12 cursor-pointer">
                <h2> {items?.card?.info?.name}</h2>
                <span className="my-5">
                  ₹
                  {items?.card?.info?.finalPrice / 100 ||
                    items?.card?.info?.price / 100 ||
                    items?.card?.info?.defaultPrice / 100}
                </span>
                <p className="text-sm my-5">{items?.card?.info?.description}</p>
                <button onClick={()=> handleDelete(items)} className="py-3 px-4 bottom-0 left-0 right-0  bg-black text-white rounded-lg  hover:bg-white hover:text-black"> Remove Item </button>
              </div>

              {/* Image section */}
              <div className="3/12  box-border relative">
                <img
                  className="rounded-xl"
                  src={MENU_ITEM_IMAGE + items?.card?.info?.imageId}
                />
              </div>
            </div>;
          })
        )}

        <div className="text-center border w-6/12 m-auto p-4 rounded-xl font-bold mb-4 ">
        Total : ₹
        { Math.round( cartItem.reduce((accumulator, currentItem) => {
          return accumulator + 
            (currentItem.card?.info?.finalPrice / 100 ||
             currentItem.card?.info?.price / 100 ||
             currentItem.card?.info?.defaultPrice / 100);
        }, 0))
        }
        
        </div>
      </div>
    </>
  );
};

export default Cart;
