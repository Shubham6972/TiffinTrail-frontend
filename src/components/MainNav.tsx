// import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import UsernameMenu from './UsernameMenu';

const MainNav = () => {
  const {loginWithRedirect ,isAuthenticated} = useAuth0();
  return (
    <div className='flex justify-around items-center'>
        <Link to="/" className="font-bold text-2xl hover:text-green-500 hover:bg-white mr-10">Home</Link>

        <span className='flex space-x-2 items-center'>
          {isAuthenticated? (<UsernameMenu/>) :(
          
          <Button variant="ghost" className='font-bold text-2xl hover:text-green-500 hover:bg-white'
          onClick={async() => await loginWithRedirect()}>
                Login 
          </Button>)}
        </span>
      
    </div>
  )
}

export default MainNav

