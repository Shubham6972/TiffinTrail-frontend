import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"



const MobileNav = () => {
  const {isAuthenticated , loginWithRedirect , user} = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Menu className="text-green-500"/>
        </SheetTrigger>
        <SheetContent className="space-y-4">
            <SheetTitle>
              {isAuthenticated ? 
              (<span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-green-500"/>
                <span className="text-2xl"> Hello,{user?.given_name}</span>
              </span>
              ):(
                <span>Welcome to TiffinTrail.com!</span>
              )}
                
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4">
              {isAuthenticated ? (
                <MobileNavLinks/>
              ):(
                <Button
                onClick={()=>loginWithRedirect()} 
                className="flex-1 font-bold bg-green-500">Login</Button>
              )}
            </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
