import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const getCategories = () => axios.get('api/categories').then(res => res.data)

const useGetAllCategories = () => useQuery(['getCategories'], getCategories)

export default useGetAllCategories