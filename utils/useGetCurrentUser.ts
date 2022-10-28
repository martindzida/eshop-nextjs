import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

type Email = string | null | undefined;

const useGetCurrentUser = (email: Email, isEnabled: boolean) =>
  useQuery(['getCurrentUser'], () => axios.get(`api/user/${email}`).then(res => res.data), {enabled: isEnabled});

export default useGetCurrentUser;

