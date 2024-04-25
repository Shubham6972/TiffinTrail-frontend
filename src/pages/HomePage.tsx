
import SearchBar, { SearchForm } from '@/components/SearchBar'
import Asset2 from '../assets/asset2.png'
import Asset3 from '../assets/asset3.jpg'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues:SearchForm)=>{
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`
        })
    }
    
  return (
   <>
    <div className='relative'>
        <img src={Asset2} className='w-full max-h-[600px] object-cover filter' />
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-md py-8 px-9 flex flex-col gap-5 text-center'>
                <h1 className='text-2xl md:text-4xl font-bold tracking-tight text-green-600'>
                    Have A Look At The Services
                </h1>
                <span className='text-sm md:text-base'>Food is Just a Click Away</span>
                <SearchBar placeHolder='Search By City or Town' onSubmit={handleSearchSubmit}/>
            </div>
            
        </div>
    </div>
    <center>
        <h1 className='font-bold tracking-tight text-2xl md:text-3xl text-green-600 mt-8'>Want to Become a Kitchen Owner</h1>
    </center>

    <div className='flex flex-col md:flex-row justify-around items-center mt-8 md:mt-16'>
        <img src={Asset3} className='h-[200px] md:h-[300px] w-auto rounded-full mb-6 md:mb-0' />
        <div className='text-center md:text-left'>
            <h1 className='text-xl md:text-3xl font-bold text-slate-950 mb-3 md:mb-8'>Register Your Kitchen Now!</h1>
            <button className='bg-green-500 text-white font-bold px-6 py-2 rounded-full text-lg md:text-xl hover:bg-slate-900 transition 200 ease-in-out'>Register</button>
        </div>
    </div>
     
  </>
    
  )
}

export default HomePage
