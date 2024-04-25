import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

   const getMyRestaurantRequest = async():Promise<Restaurant>=> {
     const accessToken = await getAccessTokenSilently();

     const response = await fetch(`${API_BASE_URL}/api/my/kitchen`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },

     })
     if(!response.ok) {
        throw new Error("Failed to get Kitchen");
     }
     return response.json();
   }

   const {data:restaurant,isLoading} = useQuery(
        "fetchMyRestaurant",
        getMyRestaurantRequest
    );

    return {restaurant,isLoading};
}

// export const useGetMyRestaurant = () => {
//     const { getAccessTokenSilently } = useAuth0();

//     const getMyRestaurantRequest = async (): Promise<Restaurant> => {
//         const accessToken = await getAccessTokenSilently();

//         const response = await fetch(`${API_BASE_URL}/api/my/kitchen`, {
//             method: "GET",
//             headers: {
//                 Authorization: `Bearer ${accessToken}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error("Failed to get Kitchen");
//         }

//         const restaurant = await response.json();

//         // Fetch and convert the image to a File object
//         const imageUrl = restaurant.kitchenImage; // Assuming 'kitchenImage' is the key for the image URL
//         const imageResponse = await fetch(imageUrl);
//         const imageBlob = await imageResponse.blob();
//         const imageFile = new File([imageBlob], 'image.jpg', { type: 'image/jpg' });

//         // Add the imageFile to the restaurant object
//         return { ...restaurant, kitchenImageFile: imageFile };
//     };

//     const { data: restaurant, isLoading } = useQuery(
//         "fetchMyRestaurant",
//         getMyRestaurantRequest
//     );

//     return { restaurant, isLoading };




export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyRestaurantRequest = async(restaurantFormData:FormData):Promise<Restaurant[]> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/kitchen` , {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body:restaurantFormData,
        });

       if(!response.ok) {
        throw new Error("Failed to create Restaurant");
       } 

       return response.json();
    };

    const { mutate: createRestaurant,isLoading,isSuccess,error} = useMutation(createMyRestaurantRequest);

    if(isSuccess) {
        toast.success("Kitchen Created");
    }

    if(error) {
        toast.error("Unable to create kitchen");
    }

    return { createRestaurant,isLoading};
}