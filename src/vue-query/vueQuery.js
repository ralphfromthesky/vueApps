import {useQuery} from '@tanstack/vue-query'
import { getRequest } from '../Axios/axiosFethched'


export const fetchedData = () => {
    return useQuery({
        queryFn: async () => (getRequest('https://65b37959770d43aba479d655.mockapi.io/foods'))
    })
}