import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import openai from '../utils/openai';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

const GptSearchBar = () => {

  const langKey = useSelector((store)=> store.config.lang);
  // const configuration = new Configuration({
  //   organization: "org-Y6hk1ffa5zV990nYtQmQSOH4",
  //   apiKey: "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",
  // });
  
  const searchText = useRef(null);
  const handleGptSearchClick= async() => {
    console.log(searchText.current .value)

    const gptQuery= searchText.current.value + "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya" ;
    const gptResults= await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResults.choices.openai);
  };

  

  //const handleGptSearchClick = async() => {
  //  console.log(searchText.current.value);
    // make an api call to get the results

    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + searchText.current.value +
    //   ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Housefull, Koi mil gaya.";


  //   const gptResults = await openai.chat.completions.create({
  //       messages: [{ role: 'user', content: gptQuery }],
  //       model: 'gpt-3.5-turbo',
  //   });
  //   console.log(gptResults.choices);
  // };
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className=' w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} className=' p-4 m-4 col-span-9' placeholder= {lang[langKey].gptSearchPlaceholder} type='text'/>
            <button className=' py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>
            {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar