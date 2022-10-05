import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetCrystal = (crystalId: string) => useQuery(['getCrystals'], () => axios.get(`/api/crystals/${crystalId}`).then(res => res.data))

export default useGetCrystal