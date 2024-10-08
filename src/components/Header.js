import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector,} from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';



const Header = () => {

  const showGptSearch= useSelector((store)=> store.gpt.showGptSearch)

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });

  
  }
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange= (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10  flex justify-between'>
      <img
      className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo'></img>

      {user && (
      <div className=' flex p-2'>
        { showGptSearch &&(
        <select className='p-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key = {lang.identifier} value= {lang.identifier}>{lang.name}</option>

          ))}
            
        </select>
        )}
        <button  className=' py-2 px-4 m-2 my-2 bg-purple-800 text-white rounded-lg ' onClick = {handleGptSearchClick} > {showGptSearch? "Homepage": "GPTSearch"}</button>
        <img className='w-12 h-12' alt='user icon' src='https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6' />
        <button onClick={handleSignOut} className=' font-bold , text-white'>(Sign Out)</button>
      </div>
      )}
    </div>
      
  )
}



export default Header