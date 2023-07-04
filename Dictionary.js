import React, { useState, useEffect } from 'react'
import axios from 'axios';
import search from './search.png'
import './dict.css';

const Dictionary = () => {
    const BaseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';
    const [words, setWords] = useState('')
    //function containing the Baseurl in order for me to use the get my data
// const instance = axios.create({
//     baseURL: `BaseUrl`,
//     headers: {
//         'content-type':'application/json',
//         'accept':'application/json'
//     },

    async function HandleSearch() {
        try {
            const res = await `${BaseUrl}/${setWords}`
            console.log(res)
        } catch (e) {
            console.log(e)
        }
}
























    return (
      <div className="app"> 
      <h1><i><b>Dictionary v1.001</b></i></h1>
      <div className="search">
    <input 
    placeholder='word'
    value={words}
                    onChange={(e) => setWords(e.target.value)} />
                <button className='clear'
                    type='submit'
                onClick = { HandleSearch}>Search
<img className='searchb'
      src={search}
      alt= 'search'
      
/>
</button>
                <button className='clear'
                    type='submit'
                    // onClick={ }
                >Clear</button>

                </div>
          </div>
  )
}

export default Dictionary







//     useEffect(() => {
// axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/{words}')
//         .then(res => setWords(res.data.words))
//         .catch(err => console.error(err))
//     }, [])





// {
//       words?.length > 0
//       ?(
//         <div className='container'>
//         {Meaning.map((words) => (
//           <Meaning words={words} />
//         ))} 
//     </div>
//       ) : (
    //         <div className='Empty'>
    //           <h2>Not a English word</h2>
    //         </div>
    //       )
    //     }
    
    // });
    // const instance = axios.create({
    // baseURL: `BaseUrl`,
    // headers: {
    //     'content-type':'application/json',
    //     'accept':'application/json'
    // },
        // const getData = () =>
        //     instance({
        //         'method': 'GET',
        //         url:`/{word}`
        //     });