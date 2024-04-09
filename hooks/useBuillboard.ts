import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useBuillboard = () => {
 
    const { data, error, isLoading } = useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });


  
    

    return { 
        data, 
        error, 
        isLoading, 
    };

}

//2:37:47
export default useBuillboard;