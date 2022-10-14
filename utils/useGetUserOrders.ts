import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useGetUserOrders = (userId: string) => useQuery(['getuserOrders'], () => axios.get(`/api/orders/user/${userId}}`).then(res => res.data));

export default useGetUserOrders;

