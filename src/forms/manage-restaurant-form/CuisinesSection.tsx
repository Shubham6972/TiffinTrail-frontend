import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { CuisineList } from "@/config/kitchen-config";
import { useFormContext } from "react-hook-form"
import CuisineCheckbox from "./CuisineCheckbox";

const CuisinesSection = () => {
    const {control} = useFormContext();
  return (
    <div className="space-y-2 mt-10">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
            Select Cuisine type for your kitchen
        </FormDescription>
      </div>
      <FormField control={control} 
      name="cuisines"
      render={({field})=> (
        <FormItem>
            <div className="grid md:grid-cols-4 gap-1">
              {CuisineList.map((cuisineItem)=>(
                <CuisineCheckbox cuisine={cuisineItem} field={field}/>
            ))}
            </div>
            <FormMessage/>
            
        </FormItem>
      )}
      />
    </div>
  )
}

export default CuisinesSection;
