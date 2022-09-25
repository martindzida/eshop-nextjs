import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const getCrystals = () => axios.get('api/crystals').then(res => res.data)

const useGetCrystals = () => useQuery(['getCrystals'], getCrystals)

export default useGetCrystals
