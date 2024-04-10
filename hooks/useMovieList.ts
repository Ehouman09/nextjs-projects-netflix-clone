import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useMovieList = () => {

    const { data, error, isLoading, mutate } = useSWR('/api/movies', fetcher, {
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

export default useMovieList;