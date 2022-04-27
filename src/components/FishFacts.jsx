import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Parser from 'html-react-parser'

const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

export const FishFacts = ({displayFish}) => {
  const [fish, setFish] = useState('')

  useEffect(()=>{
      goFish()
  }, [displayFish])
  const goFish = async () => {
      try {
          const response = await axios.get(`https://www.fishwatch.gov/api/species/`)
        //   setFish(response.data)
          setFish(response.data[randomNumber(115)])
        //   console.log(response.data[randomNumber(115)])
        //   console.log(response.data[randomNumber(115)]["Image Gallery"][0])
      }catch(err){
          console.log(err)
      }
    }

    const tasty = `${fish.Taste}`

    console.log(fish["Image Gallery"])

    return (
        <div className='fishBox'>
            <h2>{fish["Species Name"]}</h2>
            <div className='imgContainer'>
                <img src={fish["Image Gallery"][0].src} alt="picture of fish"></img>
            </div>
            <div className='flavorContainer'>
                <div>{Parser(tasty)}</div>
            </div>
            <button onClick={goFish}>How's it taste!?</button>
        </div>
  )
}
