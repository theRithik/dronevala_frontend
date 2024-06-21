import { QueryClient } from "@tanstack/react-query";



const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 1000*60*5, // 5 minute
            cacheTime: 300000, // 5 minutes
            retry: 1, // Retry failed requests once
            refetchOnWindowFocus: false, // Do not refetch on window focus
        }
    }
})

export default queryClient