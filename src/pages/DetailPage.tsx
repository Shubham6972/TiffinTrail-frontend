import { useCreateCheckoutSession } from "@/api/OrderApi";
import { useGetRestaurant } from "@/api/RestaurantApi";
import CheckoutButton from "@/components/CheckoutButton";
import MenuItems from "@/components/MenuItems";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { UserFormData } from "@/forms/user-profile-form/UserProfileForm";
import { MenuItem } from "@/types";
import { useState } from "react";

import { useParams } from "react-router-dom"



export type CartItem = {
  item_id:string;
  name:string;
  price:number;
  quantity:number;
}
const DetailPage = () => {
    const {restaurantId} = useParams();
    const {restaurant, isLoading} = useGetRestaurant(restaurantId)
    const {createCheckoutSession , isLoading:isCheckoutLoading} = useCreateCheckoutSession();

    const [cartItems , setCartItems] = useState<CartItem[]>(()=>{
      const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    });
    
    const addToCart = (menuItem:MenuItem)=> {
        setCartItems((prevCartItems)=> {

          const existingCartItem = prevCartItems.find((cartItem)=>cartItem.item_id === menuItem.item_id);

          let updatedCartItems;

          if(existingCartItem) {
            updatedCartItems = prevCartItems.map((cartItem)=> cartItem.item_id === menuItem.item_id ? {...cartItem ,quantity:cartItem.quantity+1} : cartItem)
          }
          else {
            updatedCartItems = [
              ...prevCartItems,{
                item_id:menuItem.item_id,
                name: menuItem.name,
                price: menuItem.price,
                quantity: 1
              }
            ]
          }

          sessionStorage.setItem(`cartItems- ${restaurantId}` , JSON.stringify(updatedCartItems))

          return updatedCartItems
        })
    }

    const removeFromCart = (cartItem : CartItem) => {
      setCartItems((prevCartItems) => {
        const updatedCartItems = prevCartItems.filter(
          (item) =>cartItem.item_id !== item.item_id
        );

        sessionStorage.setItem(`cartItems- ${restaurantId}` , JSON.stringify(updatedCartItems))

        return updatedCartItems;
      })
    }

    const onCheckout = async (userFormData: UserFormData) => {
      if (!restaurant) {
        return;
      }
  
      const checkoutData = {
        // owner_id:restaurant.owner_id,
        cartItems: cartItems.map((cartItem) => ({
          item_id: cartItem.item_id,
          name: cartItem.name,
          quantity: cartItem.quantity.toString(),
        })),
        restaurantId: restaurant.owner_id,
        deliveryDetails: {
          name: userFormData.name,
          addressLine1: userFormData.address_line1,
          city: userFormData.city,
          country: userFormData.country,
          email: userFormData.email as string,
        },
      };
  
      const data = await createCheckoutSession(checkoutData);
      window.location.href = data.url;
    };
    

    
    
    if(isLoading  || !restaurant) {
        return "Loading...";
    }

  return (
    <div className="flex flex-col gap-10"> 
        <AspectRatio ratio={16/5}>
            <img src={restaurant.kitchenimage} className="rounded-md object-cover h-full w-full" />
        </AspectRatio>

        <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
            <div className="flex flex-col gap-4">
              <RestaurantInfo restaurant={restaurant}/>
              <span className="text-2xl font-bold tracking-tight">Menu</span>
              {restaurant.menuItems.map((menuItem)=> (
                <MenuItems menuItem={menuItem} addToCart={()=> addToCart(menuItem)}/>
              ))}
            </div>

            <div>
              <Card>
                <OrderSummary restaurant={restaurant} cartItems={cartItems} removeFromCart = {removeFromCart}/>

                <CardFooter>
                  <CheckoutButton
                    disabled={cartItems.length === 0}
                    onCheckout={onCheckout}
                    isLoading={isCheckoutLoading}
                  />
                </CardFooter>
              </Card>
            </div>
        </div>
    </div>
  )
}

export default DetailPage
