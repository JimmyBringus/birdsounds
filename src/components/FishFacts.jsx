import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Parser from 'html-react-parser'

const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]

const mapped = () => {
    bigArray.map(x => (x-1)+1)
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
          setFish(response.data[mapped])
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
