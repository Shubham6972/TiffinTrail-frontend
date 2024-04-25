import { useSearchRestaurant } from "@/api/RestaurantApi";
import SearchResultCard from "@/components/SearchResultCard";

import SearchResultInfo from "@/components/SearchResultInfo";
import { useParams } from "react-router-dom"

export type searchState = {
  searchQuery:string;

}

const SearchPage = () => {
    const {city} = useParams();
    // const [searchState,setSearchState] = useState<searchState>({
    //   searchQuery:""
    // })

    const {results,isLoading} = useSearchRestaurant(city);

    // const setSearchQuery= (searchFormData:SearchForm) => {
    //   setSearchState((prevState)=> ({
    //     ...prevState,
    //     searchQuery:searchFormData.searchQuery,
    //   }))
    // }

    // const resetSearch = () => {
    //   setSearchState((prevState)=> ({
    //     ...prevState,
    //     searchQuery:"",
    //   }))
    // }

    if(isLoading) {
      return <span>Loading...</span>
    }
    if(!results?.data || !city) {
      return <span>No results found</span>
    } 
    
    
    return (
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div id="cuisine-list">
        </div>
        <div id="main-content" className="flex flex-col gap-5">
          <SearchResultInfo total={results.pagination.total} city={city}/>
          {results.data.map((restaurant)=>(
              <SearchResultCard restaurant={restaurant}/>
          ))}
        </div>
      </div>
    )
}

export default SearchPage
