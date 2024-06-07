import axios from "axios";

export const getRequest = async (url, params) => {
    try {
        const response = await axios.get(url)
        if(response) {
            return response.data
        }
    } catch (error) {
        console.log(`error: ${error}`)
    }
}