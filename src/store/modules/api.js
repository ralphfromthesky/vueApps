const newApi = {
    fetchApi: "https://65b37959770d43aba479d655.mockapi.io/foods",

    addApi: "https://65b37959770d43aba479d655.mockapi.io/foods",

    deleteApi: `https://65b37959770d43aba479d655.mockapi.io/foods/`
}

const add =(a,b) => {
 return a + b
}
// export default newApi;
export const useApi = () => {
    return newApi;
}