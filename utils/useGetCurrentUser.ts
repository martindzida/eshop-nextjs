import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

type Name = string | null | undefined;

const useGetCurrentUser = (name: Name, isEnabled: boolean) =>
  useQuery(['getCurrentUser'], () => axios.get(`api/user/${name}`).then(res => res.data), {enabled: isEnabled});

export default useGetCurrentUser;

