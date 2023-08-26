import { createContext, useContext } from 'react'
import data from '../backend/data.json'

const hotelData = data

const HotelContext = createContext()

export const useHotelContext = () => useContext(HotelContext)


function HotelProvider({children}) {
  const getHotelById = (id) => {
    return hotelData.find(hotel => hotel.id === id) || null
  }

  const hotelState = {
    hotelData,
    getHotelById
  }

  return (
    <HotelContext.Provider value={hotelState}>
        {children}
    </HotelContext.Provider>
  )
}

export default HotelProvider