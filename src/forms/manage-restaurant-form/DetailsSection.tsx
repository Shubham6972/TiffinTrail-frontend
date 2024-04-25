import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form";


const DetailsSection = () => {

    const {control} = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>
            Enter the details of your kitchen
        </FormDescription>
      </div>
      <FormField 
      control={control}
      name="kitchen_name" 
      render={({field})=>(
        <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
      )}
      />
      <div className="flex gap-4">
      <FormField 
      control={control}
      name="city" 
      render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>City</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="Eg.Chembur"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
      )}
      />
      <FormField 
      control={control}
      name="country" 
      render={({field})=>(
        <FormItem className="flex-1">
            <FormLabel>Country</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="Eg.India"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
      )}
      />
      </div>
      <FormField 
      control={control}
      name="delivery_price" 
      render={({field})=>(
        <FormItem className="max-w-[25%]">
            <FormLabel>Delivery Price</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="₹ 100"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
      )}
      />
      <FormField 
      control={control}
      name="delivery_time" 
      render={({field})=>(
        <FormItem className="max-w-[25%]">
            <FormLabel>Delivery Time</FormLabel>
            <FormControl>
                <Input {...field} className="bg-white" placeholder="30 mins"/>
            </FormControl>
            <FormMessage/>
        </FormItem>
      )}
      />
    </div>
  )
}

export default DetailsSection
