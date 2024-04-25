
import { Restaurant, RestaurantSeachResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useGetRestaurant = (restaurantId?:string)=> {
    const getRestaurantByIdRequest = async():Promise<Restaurant>=> {
        const response = await fetch(
            `${API_BASE_URL}/api/kitchen/${restaurantId}`
        )

        if(!response.ok) {
            throw new Error("Failed to get kitchen")
        }
        return response.json()
    }

    const {data:restaurant , isLoading} = useQuery(
        "fetchRestaurant",
        getRestaurantByIdRequest,
        {
            enabled:!!restaurantId,
        }
    )

    return { restaurant,isLoading};
}
















export const useSearchRestaurant = (city?:string) => {
    const createSearchRequest = async():Promise<RestaurantSeachResponse> => {

        // const params = new URLSearchParams();
        // params.set("searchQuery" , searchState.searchQuery)

        const response = await fetch(`${API_BASE_URL}/api/kitchen/search/${city}`)

        if(!response.ok) {
            throw new Error("Failed to get Kitchen");
        }

        return response.json()
    }


    const {data:results,isLoading} = useQuery(
        ["searchRestaurants"],
        createSearchRequest,
        {enabled: !!city}
    )
    console.log(results)

    return {results,isLoading}
}