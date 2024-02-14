export const API_FetchProducts = () => {
    return fetch('http://localhost:3001/products')
        .then(res => res.json())
};