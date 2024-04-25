export type User = {
    user_id:string;
    auth0Id:string;
    email:string;
    name:string;
    address_line1:string;
    city:string;
    country:string;
};

export type MenuItem = {
    item_id:string;
    kitchen_name:string,
    name:string;
    price:number;
    lastUpdated:string;
}

export type Restaurant = {
    owner_id:string;
    kitchen_name:string;
    city:string;
    country:string,
    delivery_price:number;
    delivery_time:number;
    cuisines:string[];
    menuItems:MenuItem[];
    imageUrl:string;
    kitchenimage:string
    lastUpdated:string;
}

export type RestaurantSeachResponse = {
    data:Restaurant[];
    pagination:{
        total:number;
        page:number;
        pages:number;

    }
}