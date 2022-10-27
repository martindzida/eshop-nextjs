import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

//TODO: useless because session is possilby null
const useGetCurrentUser = (email: string) => useQuery(['getCurrentUser'], () => axios.get(`api/user/${email}`).then(res => res.data));

export default useGetCurrentUser;

