export const API_FetchProducts = () => {
    return fetch('http://192.168.31.38:3001/products')
        .then(res => res.json())
};