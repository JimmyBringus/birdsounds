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
          let response = await axios.get(`https://www.fishwatch.gov/api/species/`)
        //   setFish(response.data)
          setFish(response.data[randomNumber(115)])
      }catch(err){
          console.log(err)
      }
    }

    const tasty = `${fish.Taste}`
    const image = `${fish["Image Gallery"]}`

    return (
        <div className='fishBox'>
            <h2>{fish["Species Name"]}</h2>
            <div className='imgContainer'>
                <img className='fishpic' src={image[0].src} alt={image[0].alt}></img>
            </div>
            <div className='flavorContainer'>
                <div>{Parser(tasty)}</div>
            </div>
            <button onClick={goFish}>How's it taste!?</button>
        </div>
  )
}
