import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const useGetCurrentUser = (email: string | null | undefined, isEnabled: boolean) =>
  useQuery(['getCurrentUser'], () => axios.get(`api/user/${email}`).then(res => res.data), {enabled: isEnabled});

export default useGetCurrentUser;

