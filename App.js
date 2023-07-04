import { useState, useEffect } from "react";
import React from 'react'
import Jokes from './Api/jokes'
// import axios from 'axios'
import Dictionary from "./Api/Dictionary";

const App = () => {
    // const [data, setData] =useState([])
    // useEffect(() => {
    //     axios.get('https://reqres.in/api/users?page=2')
    //         .then(res => setData(res.data.data))
    //     .catch(err => console.error(err))
    // }, [])
  return (
      <div>
          {/* <h2>axios library</h2>
          {
              data.map((d, i) => {
                  return <p key={i}>{d.email}</p>
              })
          } */}
          <Dictionary />
    </div>
  )
}

export default App